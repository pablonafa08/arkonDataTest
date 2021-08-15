import React from 'react'
import { useActivitiesState, useActivitiesActions, ActivityItem } from 'core/context'
import { NewActivity, ActivitiesList, CurrentActivity } from '../containers'

export const ActivitiesListPage = () => {
  const { activities: itemsActivities } = useActivitiesState()
  const { setActivities } = useActivitiesActions()

  const onAddActivity = (value: ActivityItem) => {
    const newItems = [...itemsActivities]
    newItems.push(value)
    setActivities(newItems)
  }

  return (
    <div>
      <NewActivity onAdd={onAddActivity} />
      <CurrentActivity />
      <ActivitiesList />
    </div>
  )
}
