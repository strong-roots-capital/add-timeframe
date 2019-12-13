/**
 * add-timeframe
 * Increment date by timeframe
 */

// TODO: eslint

import D from 'od'
import ow from 'ow'
import session from 'market-session'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'


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
    const unit = timeUnit(normalizedTimeframe)

    return  D.add(unit, quantifier, date)
}

function timeUnit(
    timeframe: string
): 'minute' | 'hour' | 'day' | 'week' | 'month' {

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
