import test from 'ava'
import D from 'od'

/**
 * Library under test
 */

import { addTimeframe } from '../src/add-timeframe'

test('should increment a year', t => {
    const start = D.startOf('year', new Date(Date.now()))
    const expected = D.add('year', 1, start)
    t.deepEqual(expected, addTimeframe('12M', start))
})

test('should increment a month', t => {
    const start = D.startOf('month', new Date(Date.now()))
    const expected = D.add('month', 1, start)
    t.deepEqual(expected, addTimeframe('1M', start))
})

test('should increment a week', t => {
    const start = D.startOf('week', new Date(Date.now()))
    const expected = D.add('week', 1, start)
    t.deepEqual(expected, addTimeframe('1W', start))
})

test('should increment a day', t => {
    const start = D.startOf('day', new Date(Date.now()))
    const expected = D.add('day', 1, start)
    t.deepEqual(expected, addTimeframe('1D', start))
})

test('should increment an hour', t => {
    const start = D.startOf('hour', new Date(Date.now()))
    const expected = D.add('hour', 1, start)
    t.deepEqual(expected, addTimeframe('1H', start))
})

test('should increment a quarter-hour', t => {
    const start = D.startOf('hour', new Date(Date.now()))
    const expected = D.add('minute', 15, start)
    t.deepEqual(expected, addTimeframe('15', start))
})
