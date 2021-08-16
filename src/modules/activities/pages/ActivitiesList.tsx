import React from 'react'
import { useActivitiesActions } from 'core/context'
import { NewEditActivity, DeleteActivityDialog, ActivitiesList, CurrentActivity } from '../containers'
import { AcceptButton } from '../lib'

export const ActivitiesListPage = () => {
  const { setOpenAddEditDialog } = useActivitiesActions()

  return (
    <div>
      <AcceptButton onClick={() => setOpenAddEditDialog()}>Agregar</AcceptButton>
      <NewEditActivity />
      <DeleteActivityDialog />

      <CurrentActivity />
      <ActivitiesList />
    </div>
  )
}
