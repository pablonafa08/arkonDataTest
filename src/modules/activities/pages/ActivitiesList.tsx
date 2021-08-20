import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { canSeeActivity } from '../utils'
import { NewEditActivity, DeleteActivityDialog, ActivitiesList, CurrentActivity } from '../containers'
import { Button, MainContainer, NoResultsMessage, FilterSelect, SelectTypeDuration } from '../lib'

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
  const [filter, setFilter] = React.useState<SelectTypeDuration>('all')
  const itemsFiltered = activities.filter(item => canSeeActivity(item, !item.isFinished, filter))

  return (
    <MainContainer>
      {/* ***** Top of page (Num results, filter and add button) ***** */}
      <div className={classes.topContent}>
        <div className="flex items-center justify-between w-full">
          <div className={classes.results}>
            {itemsFiltered.length} Resultado(s) {filter !== 'all' ? 'filtrado(s)' : ''}
          </div>

          <FilterSelect filterSelected={filter} onChange={value => setFilter(value)} />
        </div>

        <Button onClick={() => setOpenAddEditDialog()} className={classes.button} variant="contained" color="primary">
          Agregar
        </Button>
      </div>

      {/* ***** Activity started ***** */}
      <CurrentActivity />

      {/* ***** List of activities ***** */}
      {itemsFiltered.length ? <ActivitiesList filter={filter} /> : <NoResultsMessage>No hay tareas pendientes</NoResultsMessage>}

      {/* ***** Dialogs to create, edit and delete activity ***** */}
      <NewEditActivity />
      <DeleteActivityDialog />
    </MainContainer>
  )
}
