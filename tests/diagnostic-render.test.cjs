const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");

// Server rendering with controlled hooks: no browser, network, lead or external integrations.
function renderState(status, tier, message = null) {
  const source = fs.readFileSync("src/components/sections/diagnostic-request-form.tsx", "utf8");
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const states = [undefined, 0, status, tier, message, {}, null];
  let index = 0;
  const fakeReact = { ...React, useState: (initial) => [states[index++] ?? initial, () => {}], useEffect: () => {}, useRef: () => ({ current: null }) };
  const tag = (name) => function Stub({ children, ...props }) { return React.createElement(name, props, children); };
  const modules = {
    react: fakeReact,
    "react/jsx-runtime": require("react/jsx-runtime"),
    "next/link": { __esModule: true, default: tag("a") },
    "@/components/ui/button": { Button: tag("button") },
    "@/components/ui/card": { Card: tag("div") },
    "@/lib/public-env": { publicEnv: {} },
    "@/lib/site-config": { SITE_CONFIG: { giftsPath: "/regalos" } },
    "@/lib/utils": { cn: (...values) => values.filter(Boolean).join(" ") },
    "@/lib/funnel-analytics": { trackFunnelEvent: () => {} },
    "@/lib/diagnostic-submit": { submitDiagnostic: () => { throw Error("unexpected network"); } },
  };
  const context = { exports: {}, require: (id) => { if (!(id in modules)) throw Error(`Unexpected dependency ${id}`); return modules[id]; } };
  vm.runInNewContext(js, context);
  return renderToStaticMarkup(React.createElement(context.exports.DiagnosticRequestForm, { bookingUrl: "https://cal.com/example" }));
}

for (const [tier, expected] of [["llamada", "Agenda la llamada"], ["regalos", "Ver recursos gratuitos"], ["newsletter", "Sumarme a la lista"]]) {
  test(`renders the ${tier} confirmation without external calls`, () => {
    assert.match(renderState("submitted", tier), new RegExp(expected));
  });
}

test("renders a recoverable error and keeps the form available", () => {
  const html = renderState("error", null, "Error simulado");
  assert.match(html, /role="alert"/);
  assert.match(html, /Error simulado/);
  assert.match(html, /Siguiente/);
});
