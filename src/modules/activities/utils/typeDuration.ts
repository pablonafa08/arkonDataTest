import { parse, isAfter, startOfDay, addMinutes } from 'date-fns'
import { DefaultDuration, ActivityItem } from 'core/context'

const NOW = new Date()

// receives a `time` with format 'HH:mm:ss' and the `type of duration`
// returns a `boolean`, which indicates if the received `time` matches the `type of duration` received
export const hasFilteredDurationType = (time: string, typeDuration: DefaultDuration) => {
  const timeDate = parse(time, 'HH:mm:ss', NOW)
  const startToday = startOfDay(NOW)

  if (isAfter(timeDate, addMinutes(startToday, 59))) {
    return typeDuration === 'long'
  } else if (isAfter(timeDate, addMinutes(startToday, 30))) {
    return typeDuration === 'medium'
  }
  return typeDuration === 'short'
}

// function used to filter. Determines whether a to-do list activity should be displayed or not
export const canSeeActivity = (item: ActivityItem, isNotFinished: boolean, filter: string) => {
  switch (filter) {
    case 'long':
      return isNotFinished && hasFilteredDurationType(item.time, 'long')
    case 'medium':
      return isNotFinished && hasFilteredDurationType(item.time, 'medium')
    case 'short':
      return isNotFinished && hasFilteredDurationType(item.time, 'short')
    default:
      return isNotFinished
  }
}
