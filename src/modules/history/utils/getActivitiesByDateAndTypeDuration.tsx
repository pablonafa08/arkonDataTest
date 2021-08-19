import { isSameDay } from 'date-fns'
import { ActivityItem, DefaultDuration } from 'core/context'
import { hasFilteredDurationType } from 'modules/activities/utils'

export const getActivitiesByDateAndTypeDuration = (activitiesFinished: ActivityItem[], DAYS_LAST_WEEK: Date[]) => {
  const getTotalActivitiesByDate = () => {
    return DAYS_LAST_WEEK.map(day => activitiesFinished.filter(item => isSameDay(item.dateFinished, day)).length)
  }

  const getActivitiesByDateAndType = (date: Date, type: DefaultDuration) => {
    return activitiesFinished.filter(item => isSameDay(item.dateFinished, date) && hasFilteredDurationType(item.time, type)).length
  }

  const getActivitiesOfWeekByType = (type: DefaultDuration) => {
    return DAYS_LAST_WEEK.map(day => getActivitiesByDateAndType(day, type))
  }

  return {
    getTotalActivitiesByDate,
    getActivitiesByDateAndType,
    getActivitiesOfWeekByType,
  }
}
