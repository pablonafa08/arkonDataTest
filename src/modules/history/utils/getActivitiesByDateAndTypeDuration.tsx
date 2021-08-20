import { isSameDay } from 'date-fns'
import { ActivityItem, DefaultDuration } from 'core/context'
import { hasFilteredDurationType } from 'modules/activities/utils'

// hook to obtain the totals of the completed tasks
// they are obtained for each type of duration and for each day of the last week
export const getActivitiesByDateAndTypeDuration = (activitiesFinished: ActivityItem[], DAYS_LAST_WEEK: Date[]) => {
  // returns an array where each position is a day of the last week
  // and in each position is the total of tasks completed on that day (all types of duration)
  const getTotalActivitiesByDate = () => {
    return DAYS_LAST_WEEK.map(day => activitiesFinished.filter(item => isSameDay(item.dateFinished, day)).length)
  }

  // returns the total of tasks completed on a specific date and of a type of duration
  const getActivitiesByDateAndType = (date: Date, type: DefaultDuration) => {
    return activitiesFinished.filter(item => isSameDay(item.dateFinished, date) && hasFilteredDurationType(item.time, type)).length
  }

  // returns an array where each position is a day of the last week
  // and in each position is the total of tasks completed that day of a `specific type of duration`
  const getActivitiesOfWeekByType = (type: DefaultDuration) => {
    return DAYS_LAST_WEEK.map(day => getActivitiesByDateAndType(day, type))
  }

  return {
    getTotalActivitiesByDate,
    getActivitiesByDateAndType,
    getActivitiesOfWeekByType,
  }
}
