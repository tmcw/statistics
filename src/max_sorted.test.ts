import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { maxSorted } from "./max_sorted.ts";

Deno.test("maxSorted", () => {
  assertEquals(maxSorted([-1, 0, 1, 2, 3, 4]), 4);

  assertThrows(
    (): void => {
      maxSorted([]);
    },
    Error,
    "maxSorted requires at least one data point"
  );
});
