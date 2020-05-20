# Deno basic statistics module.

> This package started as [simple-statistics](https://github.com/tmcw/simple-statistics) fork. The Roadmap will be more likely basic statistics functions and nonparametric tests from [nemene](https://github.com/ergenekonyigit/nemene).

## Functions and examples

### Descriptive statistics

| Function        | Example                                                    |
|-----------------|------------------------------------------------------------|
| [min][]         | `min([-3, 0, 3])`                                          |
| [max][]         | `max([1, 2, 3])`                                           |
| [sum][]         | `sum([1, 2, 3.5])`                                         |
| [sumSimple][]   | `sumSimple([1, 2, 3.5])`                                   |
| [quantile][]    | `quantile([3, 6, 7, 8, 8], 0.25)`                          |
| quantileRank    | TODO                                                       |
| [product][]     | `product([1, 2, 3, 5])`                                    |

[min]: ./src/min.ts
[max]: ./src/max.ts
[sum]: ./src/sum.ts
[sumSimple]: ./src/sum_simple.ts
[quantile]: ./src/quantile.ts
[product]: ./src/product.ts

### Sorted basic descriptive statistics

| Function             | Example                                               |
|----------------------|-------------------------------------------------------|
| [minSorted][]        | `minSorted([-100, -10, 1, 2, 5])`                     |
| [maxSorted][]        | `maxSorted([5, 2, 1, -10, -100])`                     |
| [quantileSorted][]   | `quantileSorted([3, 6, 9, 10, 12], 0.4)`              |
| quantileRankSorted   | TODO                                                  |

[minSorted]: ./src/min_sorted.ts
[maxSorted]: ./src/max_sorted.ts
[quantileSorted]: ./src/quantile_sorted.ts

### Measures of central tendency

| Function             | Example                                               |
|----------------------|-------------------------------------------------------|
| [mean][]             | `mean([-1, 0, 1, 2, 3, 4])`                           |
| [addToMean][]        | `addToMean(14, 5, 53)`                                |
| [mode][]             | `mode([0, 0, 1])`                                     |
| [modeSorted][]       | `modeSorted([0, 0, 1])`                               |
| modeFast             | TODO                                                  |
| median               | TODO                                                  |
| medianSorted         | TODO                                                  |
| [harmonicMean][]     | `harmonicMean([2, 3])`                                |
| [geometricMean][]    | `geometricMean([1.80, 1.166666, 1.428571])`           |
| [rootMeanSquare][]   | `rootMeanSquare([-1, 1, -1, 1])`                      |
| sampleSkewness       | TODO                                                  |

[mean]: ./src/mean.ts
[addToMean]: ./src/add_to_mean.ts
[mode]: ./src/mode.ts
[modeSorted]: ./src/mode_sorted.ts
[harmonicMean]: ./src/harmonic_mean.ts
[geometricMean]: ./src/geometric_mean.ts
[rootMeanSquare]: ./src/root_mean_square.ts

### Measures of dispersion

| Function                      | Example                                      |
|-------------------------------|----------------------------------------------|
| [variance][]                  | `variance([1, 2, 3, 4, 5, 6])`               |
| [sampleVariance][]            | `sampleVariance([1, 2, 3, 4, 5])`            |
| [standardDeviation][]         | `standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])`|
| [sampleStandardDeviation][]   | `sampleStandardDeviation([2, 4, 4, 5, 7, 9])`|
| medianAbsoluteDeviation       | TODO                                         |
| interquartileRange            | TODO                                         |
| [sumNthPowerDeviations][]     | `sumNthPowerDeviations([0, 1], 2)`           |
| [zScore][]                    | `zScore(78, 80, 5)`                          |

[variance]: ./src/variance.ts
[sampleVariance]: ./src/sample_variance.ts
[standardDeviation]: ./src/standard_deviation.ts
[sampleStandardDeviation]: ./src/sample_standard_deviation.ts
[sumNthPowerDeviations]: ./src/sum_nth_power_deviations.ts
[zScore]: ./src/z_score.ts
