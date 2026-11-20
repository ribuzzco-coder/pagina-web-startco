const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const test = require("node:test");
const ts = require("typescript");

const source = fs.readFileSync("src/lib/scoring/diagnostic-routing.ts", "utf8");
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const context = { exports: {} };
vm.runInNewContext(code, context);
const { scoreDiagnosticRequest } = context.exports;

for (const procesoActual of ["aun_validando", "funciona_informal", "consistente"]) {
  test(`same commercial criteria for stage ${procesoActual}`, () => {
    const profile = { procesoActual, urgencia: "ya", autoridad: "yo_decido" };
    assert.equal(scoreDiagnosticRequest({ ...profile, presupuesto: "aproximado" }).routingTier, "regalos");
    assert.equal(scoreDiagnosticRequest({ ...profile, presupuesto: "definido" }).routingTier, "llamada");
    assert.equal(scoreDiagnosticRequest({ ...profile, presupuesto: "explorando", urgencia: "explorando" }).routingTier, "newsletter");
  });
}
