import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'modules/activities/lib'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    height: HEADER_HEIGHT,
    background: theme.palette.primary.main,
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    margin: 'auto',
    height: '100%',
    width: '100%',
    maxWidth: 1280,
    color: '#FFF',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.body}>
        <span className="text-xl font-semibold">Listado de tareas</span>
        <div>
          <Link to="/">Tareas pendientes</Link>
          <Link to="/history">Tareas completadas</Link>
          <Link to="/graphic">Gráfica</Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
