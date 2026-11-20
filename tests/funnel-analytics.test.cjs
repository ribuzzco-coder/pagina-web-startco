const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function load(windowValue) {
  const source = fs.readFileSync("src/lib/funnel-analytics.ts", "utf8");
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const context = { exports: {}, window: windowValue };
  vm.runInNewContext(js, context);
  return context.exports;
}

test("sends only a fixed event name and categorical stage to the existing collector", () => {
  const calls = [];
  const analytics = load({ gtag: (...args) => calls.push(args) });
  analytics.trackFunnelEvent("diagnostic_complete", "regalos");
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "event");
  assert.equal(calls[0][1], "diagnostic_complete");
  assert.equal(calls[0][2].funnel_stage, "regalos");
  assert.deepEqual(Object.keys(calls[0][2]), ["funnel_stage"]);
});

test("absence or failure of collector never interrupts the application", () => {
  assert.doesNotThrow(() => load({}).trackFunnelEvent("diagnostic_start", "contacto"));
  assert.doesNotThrow(() => load({ gtag: () => { throw new Error("offline"); } }).trackFunnelEvent("diagnostic_error", "request"));
});

test("counts accepted calendar bookings once without exposing booking data", () => {
  const calls = [];
  const track = load({ gtag: (...args) => calls.push(args) }).createBookingConfirmationTracker();
  for (const status of ["PENDING", "CANCELLED", "ACCEPTED", "ACCEPTED"]) {
    track({ detail: { data: { uid: "test-booking", status, email: "private@example.test" } } });
  }
  assert.deepEqual(JSON.parse(JSON.stringify(calls)), [["event", "booking_confirmed", { funnel_stage: "llamada" }]]);
});
