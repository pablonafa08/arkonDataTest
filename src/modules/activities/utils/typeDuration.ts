import { parse, isAfter, startOfDay, addMinutes } from 'date-fns'
import { DefaultDuration, ActivityItem } from 'core/context'

const NOW = new Date()

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
