import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { numericSort } from "./numeric_sort.ts";

const { test } = Deno;

test("numericSort", () => {
  assertEquals(numericSort([3, 2, 1]), [1, 2, 3]);
  assertEquals(numericSort([1, 10, 12, 102, 20]), [1, 10, 12, 20, 102]);
});
