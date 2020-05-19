import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { mode } from "./mode.ts";

const { test } = Deno;

test("mode", () => {
  assertEquals(mode([2, 4, 0, 1, 3, -1, 1]), 1);
  assertEquals(mode([67, 1, 131, 34, 56, 67]), 67);

  assertThrows(
    (): void => {
      mode([]);
    },
    Error,
    "mode requires at least one data point"
  );
});
