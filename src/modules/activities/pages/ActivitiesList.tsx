import React from 'react'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { canSeeActivity } from '../utils'
import { NewEditActivity, DeleteActivityDialog, ActivitiesList, CurrentActivity } from '../containers'
import { AcceptButton, Link } from '../lib'

export const ActivitiesListPage = () => {
  const { activities } = useActivitiesState()
  const { setOpenAddEditDialog } = useActivitiesActions()
  const [filter, setFilter] = React.useState('all')
  const itemsFiltered = activities.filter(item => canSeeActivity(item, !item.isFinished, filter))

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          {itemsFiltered.length} Resultado(s) {filter !== 'all' ? 'filtrado(s)' : ''}
        </div>
        <Link to="/history">Tareas completadas</Link>
        <Link to="/graphic">Gráfica</Link>

        <select onChange={ev => setFilter(ev.target.value)}>
          <option value="all">Todos</option>
          <option value="short">Corto (30 min o menos)</option>
          <option value="medium">Medio (mas 30 min)</option>
          <option value="long">Largo (mas de 1 hr)</option>
        </select>

        <AcceptButton onClick={() => setOpenAddEditDialog()} style={{ margin: 0 }}>
          Agregar
        </AcceptButton>
      </div>

      <NewEditActivity />
      <DeleteActivityDialog />

      <CurrentActivity />
      <ActivitiesList filter={filter} />
    </div>
  )
}
