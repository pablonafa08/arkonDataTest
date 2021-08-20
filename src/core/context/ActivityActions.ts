import { useActivitiesDispatch, ActivityItem } from './ActivityContext'

// hook that contains the functions to trigger the dispatch
export const useActivitiesActions = () => {
  const dispatch = useActivitiesDispatch()

  const setActivities = (activities: ActivityItem[]) => {
    dispatch({ type: 'SetActivities', payload: activities })
  }

  const setCurrentActivity = (activity: ActivityItem) => {
    dispatch({ type: 'SetCurrentActivity', payload: activity })
  }

  const setOpenAddEditDialog = (activity?: ActivityItem) => {
    dispatch({ type: 'SetOpenAddEditDialog', payload: activity })
  }

  const setOpenDeleteDialog = (activity: ActivityItem) => {
    dispatch({ type: 'SetOpenDeleteDialog', payload: activity })
  }

  const setCloseDialog = () => {
    dispatch({ type: 'SetCloseDialog' })
  }

  return {
    setActivities,
    setCurrentActivity,
    setOpenAddEditDialog,
    setOpenDeleteDialog,
    setCloseDialog,
  }
}
