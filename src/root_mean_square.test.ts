import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { rootMeanSquare } from "./root_mean_square.ts";

Deno.test("rootMeanSquare", () => {
  assertEquals(rootMeanSquare([-1, 1, -1, 1]), 1);
  assertEquals(rootMeanSquare([1, 2, 3, 4]).toFixed(2), "2.74");

  assertThrows(
    (): void => {
      rootMeanSquare([]);
    },
    Error,
    "rootMeanSquare requires at least one data point"
  );
});
