import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { mean } from "./mean.ts";

const { test } = Deno;

test("mean", () => {
  assertEquals(mean([-1, 0, 1, 2, 3, 4]), 1.5);
  assertEquals(mean([22, 131, 20, 7, 12]), 38.4);

  assertThrows(
    (): void => {
      mean([]);
    },
    Error,
    "mean requires at least one data point"
  );
});
