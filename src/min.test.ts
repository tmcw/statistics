import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { min } from "./min.ts";

Deno.test("min", () => {
  assertEquals(min([-1, 0, 1, 2, 3, 4]), -1);
  assertEquals(min([22, 131, 20, 7, 12]), 7);

  assertThrows(
    (): void => {
      min([]);
    },
    Error,
    "min requires at least one data point"
  );
});
