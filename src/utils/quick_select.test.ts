import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { quickSelect } from "./quick_select.ts";

const { test } = Deno;

test("quickSelect short arrays", () => {
  const arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];
  quickSelect(arr, 8);
  assertEquals(arr,[39, 28, 28, 33, 21, 12, 22, 50, 53, 56, 59, 65, 90, 77, 95]);
});

test("quickSelect long arrays", () => {
  const arr = [];
  for (let i = 1000; i >= 0; i--) arr.push(i);
  quickSelect(arr, 300);
  assertEquals(arr[300], 300);
});

test("quickSelect long arrays with left right index", () => {
  const arr = [];
  for (let i = 1000; i >= 0; i--) arr.push(i);
  quickSelect(arr, 500, 10, 620);
  assertEquals(arr[300], 700);
});
