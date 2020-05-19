import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { modeSorted } from "./mode_sorted.ts";

const { test } = Deno;

test("modeSorted", () => {
  assertEquals(modeSorted([-1, 0, 1, 1, 2, 3, 4]), 1);
  assertEquals(modeSorted([1, 34, 56, 67, 67, 131]), 67);

  assertThrows(
    (): void => {
      modeSorted([]);
    },
    Error,
    "mode requires at least one data point"
  );
});
