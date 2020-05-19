import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { variance } from "./variance.ts";

Deno.test("variance", () => {
  assertEquals(variance([1, 2, 3, 4, 5, 6]), 2.9166666666666665);
  assertEquals(variance([1]), 0);

  assertThrows(
    (): void => {
      variance([]);
    },
    Error,
    "variance requires at least one data point"
  );
});
