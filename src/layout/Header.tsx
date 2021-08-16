import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    height: HEADER_HEIGHT,
    background: theme.palette.primary.main,
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
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
        <span className="text-xl font-semibold">Listado de actividades</span>
      </Toolbar>
    </AppBar>
  )
}
