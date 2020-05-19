/**
 * The [Geometric Mean](https://en.wikipedia.org/wiki/Geometric_mean) is
 * a mean function that is more useful for numbers in different
 * ranges.
 *
 * This is the nth root of the input numbers multiplied by each other.
 *
 * The geometric mean is often useful for
 * **[proportional growth](https://en.wikipedia.org/wiki/Geometric_mean#Proportional_growth)**: given
 * growth rates for multiple years, like _80%, 16.66% and 42.85%_, a simple
 * mean will incorrectly estimate an average growth rate, whereas a geometric
 * mean will correctly estimate a growth rate that, over those years,
 * will yield the same end value.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {number[]} x sample of one or more data points
 * @returns {number} geometric mean
 * @throws {Error} if x is empty
 * @throws {Error} if x contains a negative number
 * @example
 * geometricMean([1.80, 1.166666, 1.428571]);
 */
export function geometricMean(x: number[]): number {
  if (!x.length) {
      throw new Error("geometricMean requires at least one data point");
  }

  // the starting value.
  let value = 1;

  for (let i = 0; i < x.length; i++) {
      // the geometric mean is only valid for positive numbers
      if (x[i] <= 0) {
          throw new Error(
              "geometricMean requires only positive numbers as input"
          );
      }

      // repeatedly multiply the value by each number
      value *= x[i];
  }

  return Math.pow(value, 1 / x.length);
}
