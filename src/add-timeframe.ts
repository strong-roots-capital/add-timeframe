/**
 * add-timeframe
 * Increment date by timeframe
 */

const debug = require('debug')('add-timeframe')

import ow from 'ow'
import moment from 'moment'
import session from 'market-session'
import {
    inTradingviewFormat,
    isTradingviewFormatMonths,
    isTradingviewFormatWeeks,
    isTradingviewFormatDays,
    isTradingviewFormatHours,
    isTradingviewFormatMinutes
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


/**
 * Return the duration (as a `moment.unitOfTime.Base`) of a timeframe
 * in Trading View format.
 *
 * @param timeframe - Timeframe of which to determine duration
 * @returns Duration of timeframe as `moment.unitOfTime.Base`
 */
function unitOfDuration(timeframe: string): moment.unitOfTime.Base {

    ow(timeframe, ow.string.is(inTradingviewFormat))

    const durationTranslations: [(s: string) => boolean, moment.unitOfTime.Base][] = [
        [isTradingviewFormatMinutes, 'minute'],
        [isTradingviewFormatHours, 'hour'],
        [isTradingviewFormatDays, 'day'],
        [isTradingviewFormatWeeks, 'week'],
        [isTradingviewFormatMonths, 'month']
    ]
    for (const [isTimeframe, duration] of durationTranslations) {
        if (isTimeframe(timeframe))
            return duration
    }

    throw new Error(`Unable to determine duration of timeframe '${timeframe}`)
}
