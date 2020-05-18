/**
 * The min is the lowest number in the array. This runs on `O(n)`, linear time in respect to the array
 *
 * @param {number[]} x sample of one or more data points
 * @throws {Error} if the the length of x is less than one
 * @returns {number} minimum value
 * @example
 * min([1, 5, -10, 100, 2]); // => -10
 */
export function min(x: number[]): number {
  if (!x.length) {
    throw new Error("min requires at least one data point")
  }

  let minValue = x[0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < minValue) {
      minValue = x[i];
    }
  }

  return minValue;
}
