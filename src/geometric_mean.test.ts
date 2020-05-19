import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { geometricMean } from "./geometric_mean.ts";

Deno.test("geometricMean", () => {
  assertEquals(geometricMean([1.80, 1.166666, 1.428571]).toFixed(2), "1.44");

  assertThrows(
    (): void => {
      geometricMean([]);
    },
    Error,
    "geometricMean requires at least one data point"
  );

  assertThrows(
    (): void => {
      geometricMean([-1]);
    },
    Error,
    "geometricMean requires only positive numbers as input"
  );
});
