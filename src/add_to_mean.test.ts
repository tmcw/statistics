import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { addToMean } from "./add_to_mean.ts";

Deno.test("addToMean", () => {
  assertEquals(addToMean(14, 5, 53), 20.5);
  assertEquals(addToMean(67, 81, 20), 66.42682926829268);
});
