/**
 * The maximum is the highest number in the sorted array. With a sorted array,
 * the last element in the array is always the largest, so this calculation
 * can be done in one step, or constant time.
 *
 * @param {number[]} x input
 * @returns {number} maximum value
 * @example
 * maxSorted([-100, -10, 1, 2, 5]); // => 5
 */
export function maxSorted(x: number[]): number {
  if (!x.length) {
    throw new Error("maxSorted requires at least one data point")
  }

  return x[x.length - 1];
}
