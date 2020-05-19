import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { harmonicMean } from "./harmonic_mean.ts";

const { test } = Deno;

test("harmonicMean", () => {
  assertEquals(harmonicMean([1, 1]), 1);
  assertEquals(harmonicMean([2, 3]).toFixed(2), "2.40");
  assertEquals(harmonicMean([1, 2, 4]), 12 / 7);

  assertThrows(
    (): void => {
      harmonicMean([]);
    },
    Error,
    "harmonicMean requires at least one data point"
  );

  assertThrows(
    (): void => {
      harmonicMean([-1]);
    },
    Error,
    "harmonicMean requires only positive numbers as input"
  );
});
