import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { max } from "./max.ts";

const { test } = Deno;

test("max", () => {
  assertEquals(max([-1, 0, 1, 2, 3, 4]), 4);
  assertEquals(max([22, 131, 20, 7, 12]), 131);

  assertThrows(
    (): void => {
      max([]);
    },
    Error,
    "max requires at least one data point"
  );
});
