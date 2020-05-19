/**
 * Sort an array of numbers by their numeric value, ensuring that the
 * array is not changed in place.
 *
 * This is necessary because the default behavior of .sort
 * in JavaScript is to sort arrays as string values
 *
 *     [1, 10, 12, 102, 20].sort()
 *     // output
 *     [1, 10, 102, 12, 20]
 *
 * @param {number[]} x input array
 * @return {number[]} sorted array
 * @example
 * numericSort([3, 2, 1]) // => [1, 2, 3]
 */
export function numericSort(x: number[]): number[] {
  return x.slice().sort((a, b) => a - b)
}
