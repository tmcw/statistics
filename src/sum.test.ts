import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { sum } from "./sum.ts";

const { test } = Deno;

test("sum", () => {
  assertEquals(sum([]), 0);
  assertEquals(sum([-1, 0, 1, 2, 3, 4]), 9);
  assertEquals(sum([22, 131, 20, 7, 12]), 192);
});
