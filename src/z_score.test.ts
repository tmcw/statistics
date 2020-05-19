import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { zScore } from "./z_score.ts";

const { test } = Deno;

test("zScore", () => {
  assertEquals(zScore(78, 80, 5), -0.4);
  assertEquals(zScore(34, 25, 6), 1.5);
});
