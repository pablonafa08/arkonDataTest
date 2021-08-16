import React from 'react'
import { useActivitiesState, useActivitiesActions, ActivityItem } from 'core/context'
import { NewEditActivityDialog } from './NewEditActivityDialog'

export const NewEditActivity = () => {
  const { activities: itemsActivities, openDialog, activityEditDelete } = useActivitiesState()
  const { setActivities, setCloseDialog } = useActivitiesActions()
  const isOpenDialog = openDialog === 'addEdit'

  const onAddActivity = (value: ActivityItem) => {
    const newItems = [...itemsActivities]
    newItems.push(value)
    setActivities(newItems)
    setCloseDialog()
  }

  const onEditActivity = (value: ActivityItem) => {
    const newItems = [...itemsActivities]
    const indexItem = newItems.findIndex(item => item.id === value.id)

    newItems[indexItem] = value
    setActivities(newItems)
    setCloseDialog()
  }

  if (!isOpenDialog) return null

  return <NewEditActivityDialog isOpen={isOpenDialog} activityEdit={activityEditDelete} onClose={setCloseDialog} onAdd={onAddActivity} onEdit={onEditActivity} />
}
