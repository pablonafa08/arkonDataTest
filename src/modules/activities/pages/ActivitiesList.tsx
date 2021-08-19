import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { canSeeActivity } from '../utils'
import { NewEditActivity, DeleteActivityDialog, ActivitiesList, CurrentActivity } from '../containers'
import { Button, MainContainer } from '../lib'

const useStyles = makeStyles(theme => ({
  topContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 0,
      marginBottom: 20,
    },
  },
  results: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
  button: {
    color: '#FFF',
    margin: '12px 0',
    [theme.breakpoints.up('sm')]: {
      width: 144,
      margin: 0,
      marginLeft: 12,
    },
  },
}))

export const ActivitiesListPage = () => {
  const classes = useStyles()
  const { activities } = useActivitiesState()
  const { setOpenAddEditDialog } = useActivitiesActions()
  const [filter, setFilter] = React.useState('all')
  const itemsFiltered = activities.filter(item => canSeeActivity(item, !item.isFinished, filter))

  return (
    <MainContainer>
      <div className={classes.topContent}>
        <div className="flex items-center justify-between w-full">
          <div className={classes.results}>
            {itemsFiltered.length} Resultado(s) {filter !== 'all' ? 'filtrado(s)' : ''}
          </div>

          <select onChange={ev => setFilter(ev.target.value)}>
            <option value="all">Todos</option>
            <option value="short">Corto (30 min o menos)</option>
            <option value="medium">Medio (mas 30 min)</option>
            <option value="long">Largo (mas de 1 hr)</option>
          </select>
        </div>

        <Button onClick={() => setOpenAddEditDialog()} className={classes.button} variant="contained" color="primary">
          Agregar
        </Button>
      </div>

      <CurrentActivity />
      <ActivitiesList filter={filter} />

      <NewEditActivity />
      <DeleteActivityDialog />
    </MainContainer>
  )
}
