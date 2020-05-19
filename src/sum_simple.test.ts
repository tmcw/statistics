import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { sumSimple } from "./sum_simple.ts";

const { test } = Deno;

test("sumSimple", () => {
  assertEquals(sumSimple([]), 0);
  assertEquals(sumSimple([-1, 0, 1, 2, 3, 4]), 9);
  assertEquals(sumSimple([22, 131, 20, 7, 12]), 192);
});
