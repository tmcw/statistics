import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { minSorted } from "./min_sorted.ts";

const { test } = Deno;

test("minSorted", () => {
  assertEquals(minSorted([-1, 0, 1, 2, 3, 4]), -1);

  assertThrows(
    (): void => {
      minSorted([]);
    },
    Error,
    "minSorted requires at least one data point"
  );
});
