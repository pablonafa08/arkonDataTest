import React from 'react'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { NewEditActivity, DeleteActivityDialog, ActivitiesList, CurrentActivity } from '../containers'
import { AcceptButton, Link } from '../lib'

export const ActivitiesListPage = () => {
  const { activities } = useActivitiesState()
  const { setOpenAddEditDialog } = useActivitiesActions()
  const itemsFiltered = activities.filter(item => !item.isFinished)

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>{itemsFiltered.length} Resultado(s)</div>
        <Link to="/history">Tareas completadas</Link>
        <AcceptButton onClick={() => setOpenAddEditDialog()} style={{ margin: 0 }}>
          Agregar
        </AcceptButton>
      </div>

      <NewEditActivity />
      <DeleteActivityDialog />

      <CurrentActivity />
      <ActivitiesList />
    </div>
  )
}
