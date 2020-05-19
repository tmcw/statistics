import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { sampleStandardDeviation } from "./sample_standard_deviation.ts";

const { test } = Deno;

test("sampleStandardDeviation", () => {
  assertEquals(sampleStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2.138089935299395);

  assertThrows(
    (): void => {
      sampleStandardDeviation([]);
    },
    Error,
    "sampleVariance requires at least two data point"
  );
});
