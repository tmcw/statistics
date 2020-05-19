import { quantileSorted } from "./quantile_sorted.ts";
import { quickSelect } from "./utils/quick_select.ts";

/**
 * The [quantile](https://en.wikipedia.org/wiki/Quantile):
 * this is a population quantile, since we assume to know the entire
 * dataset in this library. This is an implementation of the
 * [Quantiles of a Population](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population)
 * algorithm from wikipedia.
 *
 * Sample is a one-dimensional array of numbers,
 * and p is either a decimal number from 0 to 1 or an array of decimal
 * numbers from 0 to 1.
 * In terms of a k/q quantile, p = k/q - it's just dealing with fractions or dealing
 * with decimal values.
 * When p is an array, the result of the function is also an array containing the appropriate
 * quantiles in input order
 *
 * @param {number[]} x sample of one or more numbers
 * @param {number[] | number} p the desired quantile, as a number between 0 and 1
 * @returns {number[] | number} quantile
 * @example
 * quantile([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20], 0.5); // => 9
 */
export function quantile(x: number[], p: number[] | number): number[] | number {
  const copy = x.slice();

  if (Array.isArray(p)) {
    // rearrange elements so that each element corresponding to a requested
    // quantile is on a place it would be if the array was fully sorted
    multiQuantileSelect(copy, p);
    // Initialize the result array
    const results = [];
    // For each requested quantile
    for (let i = 0; i < p.length; i++) {
      results[i] = quantileSorted(copy, p[i]);
    }
    return results;
  } else {
    const idx = quantileIndex(copy.length, p);
    quantileSelect(copy, idx, 0, copy.length - 1);
    return quantileSorted(copy, p);
  }
}

function quantileSelect(arr: number[], k: number, left: number, right: number): void {
  if (k % 1 === 0) {
    quickSelect(arr, k, left, right);
  } else {
    k = Math.floor(k);
    quickSelect(arr, k, left, right);
    quickSelect(arr, k + 1, k + 1, right);
  }
}

function multiQuantileSelect(arr: number[], p: number[]): void {
  const indices = [0];
  for (let i = 0; i < p.length; i++) {
    indices.push(quantileIndex(arr.length, p[i]));
  }
  indices.push(arr.length - 1);
  indices.sort((a: number, b: number) => a - b);

  const stack = [0, indices.length - 1];

  while (stack.length) {
    const r = Math.ceil(stack.pop() as number);
    const l = Math.floor(stack.pop() as number);
    if (r - l <= 1) continue;

    const m = Math.floor((l + r) / 2);
    quantileSelect(
      arr,
      indices[m],
      Math.floor(indices[l]),
      Math.ceil(indices[r])
    );

    stack.push(l, m, m, r);
  }
}

function quantileIndex(len: number, p: number): number {
  const idx = len * p;
  if (p === 1) {
    // If p is 1, directly return the last index
    return len - 1;
  } else if (p === 0) {
    // If p is 0, directly return the first index
    return 0;
  } else if (idx % 1 !== 0) {
    // If index is not integer, return the next index in array
    return Math.ceil(idx) - 1;
  } else if (len % 2 === 0) {
    // If the list has even-length, we'll return the middle of two indices
    // around quantile to indicate that we need an average value of the two
    return idx - 0.5;
  } else {
    // Finally, in the simple case of an integer index
    // with an odd-length list, return the index
    return idx;
  }
}
