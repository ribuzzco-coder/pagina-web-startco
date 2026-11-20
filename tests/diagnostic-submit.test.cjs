const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const source = fs.readFileSync("src/lib/diagnostic-submit.ts", "utf8");
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const context = { exports: {} };
vm.runInNewContext(js, context);
const { submitDiagnostic } = context.exports;

for (const tier of ["llamada", "regalos", "newsletter"]) {
  test(`accepts ${tier} from an in-memory backend without network`, async () => {
    let request;
    const fake = async (url, options) => {
      request = { url, options };
      return { ok: true, json: async () => ({ ok: true, data: { received: true, routingTier: tier } }) };
    };
    const result = await submitDiagnostic({ nombre: "Prueba ficticia" }, fake);
    assert.equal(result.ok, true);
    assert.equal(result.tier, tier);
    assert.equal(request.url, "/api/diagnostic-request");
    assert.equal(JSON.parse(request.options.body).nombre, "Prueba ficticia");
  });
}

test("surfaces validation errors and allows the caller to retry", async () => {
  const fake = async () => ({ ok: false, json: async () => ({ ok: false, error: { message: "Revisa los campos", fieldErrors: { email: ["Inválido"] } } }) });
  const result = await submitDiagnostic({}, fake);
  assert.equal(result.ok, false);
  assert.equal(result.message, "Revisa los campos");
  assert.equal(result.fieldErrors.email[0], "Inválido");
});

test("handles network errors and rejects an unknown route", async () => {
  const offline = await submitDiagnostic({}, async () => { throw new Error("offline"); });
  assert.equal(offline.ok, false);
  assert.match(offline.message, /conectar/);
  const invalid = await submitDiagnostic({}, async () => ({ ok: true, json: async () => ({ ok: true, data: { routingTier: "unexpected" } }) }));
  assert.equal(invalid.ok, false);
  assert.match(invalid.message, /confirmar/);
});
