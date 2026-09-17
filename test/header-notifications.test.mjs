import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders the winter holiday discount notification below the Open House notice", async () => {
  const header = await readFile(new URL("../app/components/Header.tsx", import.meta.url), "utf8");
  const openHouseIndex = header.indexOf("🌟 Open House every Sunday");
  const winterDiscountIndex = header.indexOf("🌟 Checkout our winter holiday season discount");
  const winterBanner = header.slice(winterDiscountIndex - 250, winterDiscountIndex);

  assert.ok(openHouseIndex >= 0, "the Open House notification should remain visible");
  assert.ok(winterDiscountIndex > openHouseIndex, "the winter discount notification should follow the Open House notice");
  assert.match(winterBanner, /max-w-5xl/, "the winter discount notice should match the Open House banner width");
});

test("aligns header content to opposite page edges and separates notices", async () => {
  const header = await readFile(new URL("../app/components/Header.tsx", import.meta.url), "utf8");

  assert.match(header, /grid-cols-\[minmax\(0,1fr\)_auto_minmax\(0,1fr\)\]/, "the desktop header should use a three-column layout");
  assert.match(header, /justify-self-start/, "the logo should align to the left page edge");
  assert.match(header, /justify-self-end/, "the contact details should align to the right page edge");
  assert.match(header, /border-t border-white\/40/, "the notice banners should have a subtle dividing line");
});
