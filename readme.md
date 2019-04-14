# add-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/add-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/add-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/add-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/add-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/add-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/add-timeframe)

> Increment date by timeframe

## Install

```shell
npm install @strong-roots-capital/add-timeframe
```

## Use

```typescript
import { addTimeframe } from '@strong-roots-capital/add-timeframe'

const date = new Date()

console.log(date)
//=>2019-04-14T23:57:54.654Z

console.log(addTimeframe('4H', date))
//=>2019-04-15T03:57:54.654Z
```

## Related

- [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)
