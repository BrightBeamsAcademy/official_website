import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("lists Maggie Lin as Head of School", async () => {
  const aboutPage = await readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8");

  assert.match(aboutPage, /name: "Maggie Lin", role: "Head of School"/);
  assert.doesNotMatch(aboutPage, /name: "Maggie Lin", role: "Supervisor"/);
});
