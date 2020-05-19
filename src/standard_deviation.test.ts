import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { standardDeviation } from "./standard_deviation.ts";

Deno.test("standardDeviation", () => {
  assertEquals(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
  assertEquals(standardDeviation([1]), 0);
});
