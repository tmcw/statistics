import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { product } from "./product.ts";

Deno.test("product", () => {
  assertEquals(product([]), 1);
  assertEquals(product([1, 2, 3, 4]), 24);
  assertEquals(product([22, 131, 20, 7]), 403480);
});
