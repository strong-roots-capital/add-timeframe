import test from 'ava'


/**
 * Library under test
 */

import { addTimeframe } from '../src/add-timeframe'

test('should reject non-TradingView timeframes', t => {
    const error = t.throws(() => {
        addTimeframe('1Y', new Date())
    })
    t.is(error.name, 'ArgumentError')
})

/* Does not compile unless type of `date` is `any` */
// test('should reject non-date dates', t => {
//     const error = t.throws(() => {
//         addTimeframe('1D', 'horse')
//     })
//     t.is(error.name, 'ArgumentError')
// })
