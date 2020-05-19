import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { sumNthPowerDeviations } from "./sum_nth_power_deviations.ts";

const { test } = Deno;

test("sumNthPowerDeviations", () => {
  assertEquals(sumNthPowerDeviations([0, 0, 0], 2), 0);
  assertEquals(sumNthPowerDeviations([0, 1], 2), 0.5);
  assertEquals(sumNthPowerDeviations([0, 1], 3), 0);
  assertEquals(sumNthPowerDeviations([0, 1, 2], 2), 2);
});
