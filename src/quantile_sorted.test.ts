import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { quantileSorted } from "./quantile_sorted.ts";

const { test } = Deno;

test("quantileSorted throw error when given array is empty", () => {
  assertThrows(
    (): void => {
      quantileSorted([], 0.5);
    },
    Error,
    "quantile requires at least one data point"
  );
});

test("quantileSorted throw error when given p is outside of the range from 0 to 1", () => {
  assertThrows(
    (): void => {
      quantileSorted([1], 1.5);
    },
    Error,
    "quantiles must be between 0 and 1"
  );
});

test("quantileSorted return last element when given p is 1", () => {
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9, 10], 1), 10);
});

test("quantileSorted return last element when given p is 0", () => {
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9, 10], 0), 3);
});

test("quantileSorted return next element in array when index mode 1 not equal to 0", () => {
  assertEquals(quantileSorted([3, 6, 7, 8, 8, 9], 0.5), 7.5);
});

test("quantileSorted return last element when given p is 0", () => {
  assertEquals(quantileSorted([3, 6], 0.5), 4.5);
});

test("quantileSorted return the x value at the index", () => {
  assertEquals(quantileSorted([3, 6, 9, 10, 12], 0.4), 9);
});
