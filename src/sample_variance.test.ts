import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { sampleVariance } from "./sample_variance.ts";

Deno.test("sampleVariance", () => {
  assertEquals(sampleVariance([1, 2, 3, 4, 5, 6]), 3.5);

  assertThrows(
    (): void => {
      sampleVariance([]);
    },
    Error,
    "sampleVariance requires at least two data point"
  );
});
