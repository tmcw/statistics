import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { quantileSorted } from "./quantile_sorted.ts";

Deno.test("quantileSorted", () => {
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9, 10], 1), 10);
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9, 10], 0), 3);
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9], 0.5), 7.5);
  assertEquals(quantileSorted([3, 6], 0.5), 4.5);
  assertEquals(quantileSorted([3, 6, 9, 10, 12], 0.4), 9);

  assertThrows(
    (): void => {
      quantileSorted([], 0.5);
    },
    Error,
    "quantile requires at least one data point"
  );

  assertThrows(
    (): void => {
      quantileSorted([1], 1.5);
    },
    Error,
    "quantiles must be between 0 and 1"
  );
});
