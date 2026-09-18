import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("renders the winter holiday discount notification below the Open House notice", async () => {
  const header = await readFile(new URL("../app/components/Header.tsx", import.meta.url), "utf8");
  const openHouseIndex = header.indexOf("🌟 Open House every Sunday");
  const winterDiscountIndex = header.indexOf("🌟 Checkout our winter holiday season discount");
  const winterBanner = header.slice(header.lastIndexOf("<a", winterDiscountIndex), winterDiscountIndex + 250);

  assert.ok(openHouseIndex >= 0, "the Open House notification should remain visible");
  assert.ok(winterDiscountIndex > openHouseIndex, "the winter discount notification should follow the Open House notice");
  assert.match(winterBanner, /max-w-5xl/, "the winter discount notice should match the Open House banner width");
  assert.match(winterBanner, /href="\/images\/winter-discount\.jpg"/, "the winter discount notice should open its own poster");
  assert.match(winterBanner, /View details ↗/, "the winter discount notice should include a details link");
  await access(new URL("../public/images/winter-discount.jpg", import.meta.url));
});

test("aligns header content to opposite page edges and separates notices", async () => {
  const header = await readFile(new URL("../app/components/Header.tsx", import.meta.url), "utf8");

  assert.match(header, /grid-cols-\[minmax\(0,1fr\)_auto_minmax\(0,1fr\)\]/, "the desktop header should use a three-column layout");
  assert.match(header, /justify-self-start/, "the logo should align to the left page edge");
  assert.match(header, /justify-self-end/, "the contact details should align to the right page edge");
  assert.match(header, /border-t-4 border-\[#F4EDD0\]/, "the notice banners should have a small cream gap");
});
