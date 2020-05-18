/**
 * This computes the maximum number in an array.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {number[]} x sample of one or more data points
 * @returns {number} maximum value
 * @throws {Error} if the the length of x is less than one
 * @example
 * max([1, 2, 3, 4]);
 * // => 4
 */
export function max(x: number[]): number {
  if (!x.length) {
    throw new Error("max requires at least one data point")
  }

  let maxValue = x[0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] > maxValue) {
      maxValue = x[i];
    }
  }

  return maxValue;
}
