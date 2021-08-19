import React from 'react'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { Dialog } from '../lib'

export const DeleteActivityDialog = () => {
  const { activities: itemsActivities, openDialog, activityEditDelete } = useActivitiesState()
  const { setActivities, setCloseDialog } = useActivitiesActions()
  const isOpenDialog = openDialog === 'delete'

  const onDelete = () => {
    const newItems = [...itemsActivities]
    const indexItem = newItems.findIndex(item => item.id === activityEditDelete.id)

    newItems.splice(indexItem, 1)
    setActivities(newItems)
    setCloseDialog()
  }

  if (!isOpenDialog) return null

  return (
    <Dialog open={isOpenDialog} title="¿Estás seguro de que quieres eliminar?" buttonPropsCancel={{ onClick: setCloseDialog }} buttonPropsOk={{ onClick: onDelete }}>
      <div className="text-center">Se eliminará la tarea:</div>
      <div className="text-center font-bold">{activityEditDelete?.description}</div>
    </Dialog>
  )
}
