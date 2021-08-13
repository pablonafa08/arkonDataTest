import { useActivitiesDispatch, ActivityItem } from './ActivityContext'

export const useActivitiesActions = () => {
  const dispatch = useActivitiesDispatch()

  const setActivities = (activities: ActivityItem[]) => {
    dispatch({ type: 'SetActivities', payload: activities })
  }

  return {
    setActivities,
  }
}
