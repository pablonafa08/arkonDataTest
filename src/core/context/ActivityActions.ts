import { useActivitiesDispatch, ActivityItem } from './ActivityContext'

export const useActivitiesActions = () => {
  const dispatch = useActivitiesDispatch()

  const setActivities = (activities: ActivityItem[]) => {
    dispatch({ type: 'SetActivities', payload: activities })
  }

  const setCurrentActivity = (activity: ActivityItem) => {
    dispatch({ type: 'SetCurrentActivity', payload: activity })
  }

  return {
    setActivities,
    setCurrentActivity,
  }
}
