/**
 * The minimum is the lowest number in the sorted array. With a sorted array,
 * the first element in the array is always the smallest, so this calculation
 * can be done in one step, or constant time.
 *
 * @param {number[]} x input
 * @returns {number} minimum value
 * @example
 * minSorted([-100, -10, 1, 2, 5]); // => -100
 */
export function minSorted(x: number[]): number {
  if (!x.length) {
    throw new Error("minSorted requires at least one data point")
  }

  return x[0];
}
