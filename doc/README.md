
add-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/add-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/add-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/add-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/add-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/add-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/add-timeframe)
==========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Increment date by timeframe

Install
-------

```shell
npm install @strong-roots-capital/add-timeframe
```

Use
---

```typescript
import { addTimeframe } from '@strong-roots-capital/add-timeframe'
// TODO: describe usage
```

Related
-------

TODO

Acknowledgments
---------------

TODO

## Index

### Functions

* [addTimeframe](#addtimeframe)

---

## Functions

<a id="addtimeframe"></a>

###  addTimeframe

▸ **addTimeframe**(timeframe: *`string`*, date: *`Date`*): `Date`

*Defined in [add-timeframe.ts:29](https://github.com/strong-roots-capital/add-timeframe/blob/6f46607/src/add-timeframe.ts#L29)*

Add `timeframe` to `date` and return the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| timeframe | `string` |  Timeframe by which to increment \`date\`, expressed in TradingView format |
| date | `Date` |  Date to increment |

**Returns:** `Date`
`date` incremented by `timeframe`

___

