/**
 * add-timeframe
 * Increment date by timeframe
 */

// TODO: eslint

const debug = require('debug')('add-timeframe')

import ow from 'ow'
import moment from 'moment'
import session from 'market-session'
import {
    inTradingviewFormat,
    isTradingviewFormatWeeks
} from '@strong-roots-capital/is-tradingview-format'


/**
 * Add `timeframe` to `date` and return the result.
 *
 * @param timeframe - Timeframe by which to increment `date`,
 * expressed in TradingView format
 * @param date - Date to increment
 * @returns `date` incremented by `timeframe`
 */
export function addTimeframe(timeframe: string, date: Date): Date {

    ow(date, ow.date)
    ow(timeframe, ow.string.is(inTradingviewFormat))

    const normalizedTimeframe = session.toString(session.fromString(timeframe))
    const quantifier = parseInt(normalizedTimeframe)

    const incremented = moment.utc(date)
    isTradingviewFormatWeeks(timeframe)
        ? incremented.add(quantifier * 7, 'days')
        : incremented.add(quantifier, unitOfDuration(timeframe))

    debug(`${date.toISOString()} + ${timeframe} = ${incremented.toISOString()}`)
    return incremented.toDate()
}


function unitOfDuration(timeframe: string): moment.unitOfTime.Base {

    switch (true) {
        case /H$/.test(timeframe):
            return 'hour'
        case /D$/.test(timeframe):
            return 'day'
        case /W$/.test(timeframe):
            return 'week'
        case /M$/.test(timeframe):
            return 'month'
        default:
            return 'minute'
    }
}
