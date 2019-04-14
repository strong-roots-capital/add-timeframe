import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import { addTimeframe } from '../src/add-timeframe'

test('should increment a year', t => {
    const start = moment.utc().startOf('year')
    const expected = start.clone().add(1, 'year').toDate()
    t.deepEqual(expected, addTimeframe('12M', start.toDate()))
})

test('should increment a month', t => {
    const start = moment.utc().startOf('month')
    const expected = start.clone().add(1, 'month').toDate()
    t.deepEqual(expected, addTimeframe('1M', start.toDate()))
})

test('should increment a week', t => {
    const start = moment.utc().startOf('week')
    const expected = start.clone().add(1, 'week').toDate()
    t.deepEqual(expected, addTimeframe('1W', start.toDate()))
})

test('should increment a day', t => {
    const start = moment.utc().startOf('day')
    const expected = start.clone().add(1, 'day').toDate()
    t.deepEqual(expected, addTimeframe('1D', start.toDate()))
})

test('should increment an hour', t => {
    const start = moment.utc().startOf('hour')
    const expected = start.clone().add(1, 'hour').toDate()
    t.deepEqual(expected, addTimeframe('1H', start.toDate()))
})

test('should increment a quarter-hour', t => {
    const start = moment.utc().startOf('hour')
    const expected = start.clone().add(15, 'minutes').toDate()
    t.deepEqual(expected, addTimeframe('15', start.toDate()))
})
