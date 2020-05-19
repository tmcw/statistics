import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { quantile } from "./quantile.ts";
import { min } from "./min.ts";
import { max } from "./max.ts";

const { test } = Deno;

test("quantile: can get proper quantiles of an even-length list", () => {
  const even = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
  assertEquals(quantile(even, 0.25), 7);
  assertEquals(quantile(even, 0.5), 9);
  assertEquals(quantile(even, 0.75), 15);
});

test("quantile: can get proper quantiles of an odd-length list", () => {
  const odd = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
  assertEquals(quantile(odd, 0.25), 7);
  assertEquals(quantile(odd, 0.5), 9);
  assertEquals(quantile(odd, 0.75), 15);
});

// test("quantile: the median quantile is equal to the median", () => {
//   const rand = [1, 4, 5, 8];
//   assertEquals(quantile(rand, 0.5), median(rand));
//   const rand2 = [10, 50, 2, 4, 4, 5, 8];
//   assertEquals(quantile(rand2, 0.5), median(rand2));
// });

test("quantile: throw error when given p is outside of the range from 0 to 1", () => {
  assertThrows(
    (): void => {
      quantile([1], -0.5);
    },
    Error,
    "quantiles must be between 0 and 1"
  );
});

test("quantile: min quantile is equal to the min", () => {
  assertEquals(quantile([1, 2, 3], 0), min([1, 2, 3]));
});

test("quantile: max quantile is equal to the max", () => {
  assertEquals(quantile([1, 2, 3], 1), max([1, 2, 3]));
});

test("quantile: when quantile arg is an array, response is an array of quantiles", () => {
  const odd = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
  assertEquals(quantile(odd, [0, 0.25, 0.5, 0.75, 1]), [3, 7, 9, 15, 20]);
  assertEquals(quantile(odd, [0.75, 0.5]), [15, 9]);
});

test("quantile: can get an array of quantiles on a small number of elements", () => {
  const input = [500, 468, 454, 469];
  assertEquals(quantile(input, [0.25, 0.5, 0.75]), [461, 468.5, 484.5]);
  assertEquals(quantile(input, [0.05, 0.25, 0.5, 0.75, 0.95]), [454, 461, 468.5, 484.5, 500]);
});
