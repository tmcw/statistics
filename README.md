# Deno basic statistics module.

[simple-statistics](https://github.com/tmcw/simple-statistics) for Deno.

## Functions and examples

### Descriptive statistics

| Function        | Example                                                    |
|-----------------|------------------------------------------------------------|
| [min][]         | `min([-3, 0, 3])`                                          |
| [max][]         | `max([1, 2, 3])`                                           |
| [sum][]         | `sum([1, 2, 3.5])`                                         |
| [sumSimple][]   | `sumSimple([1, 2, 3.5])`                                   |
| quantile        | N/A                                                        |
| quantileRank    | N/A                                                        |
| [product][]     | `product([1, 2, 3, 5])`                                    |

[min]: ./src/min.ts
[max]: ./src/max.ts
[sum]: ./src/sum.ts
[sumSimple]: ./src/sum_simple.ts
[product]: ./src/product.ts

### Sorted basic descriptive statistics

| Function             | Example                                               |
|----------------------|-------------------------------------------------------|
| [minSorted][]        | `minSorted([-100, -10, 1, 2, 5])`                     |
| [maxSorted][]        | `maxSorted([5, 2, 1, -10, -100])`                     |
| quantileSorted       | N/A                                                   |
| quantileRankSorted   | N/A                                                   |

[minSorted]: ./src/min_sorted.ts
[maxSorted]: ./src/max_sorted.ts

### Measures of central tendency

| Function         | Example                                                   |
|------------------|-----------------------------------------------------------|
| [mean][]         | `mean([-1, 0, 1, 2, 3, 4])`                               |
| [addToMean][]    | `addToMean(14, 5, 53)`                                    |
| mode             | N/A                                                       |
| modeSorted       | N/A                                                       |
| modeFast         | N/A                                                       |
| median           | N/A                                                       |
| medianSorted     | N/A                                                       |
| harmonicMean     | N/A                                                       |
| geometricMean    | N/A                                                       |
| rootMeanSquare   | N/A                                                       |
| sampleSkewness   | N/A                                                       |

[mean]: ./src/mean.ts
[addToMean]: ./src/add_to_mean.ts

### Measures of dispersion

| Function                  | Example                                          |
|---------------------------|--------------------------------------------------|
| variance                  | N/A                                              |
| sampleVariance            | N/A                                              |
| standardDeviation         | N/A                                              |
| sampleStandardDeviation   | N/A                                              |
| medianAbsoluteDeviation   | N/A                                              |
| interquartileRange        | N/A                                              |
| sumNthPowerDeviations     | N/A                                              |
| zScore                    | N/A                                              |
