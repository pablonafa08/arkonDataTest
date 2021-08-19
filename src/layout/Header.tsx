import React from 'react'
import { makeStyles, AppBar, Toolbar, Hidden } from '@material-ui/core'
import { MenuIcon } from 'img'
import { Link } from 'modules/activities/lib'
import { Drawer } from './Drawer'

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
  const [isOpen, setOpen] = React.useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.body}>
          <span className="text-xl font-semibold">Listado de tareas</span>
          <Hidden xsDown>
            <div>
              <Link to="/">Pendientes</Link>
              <Link to="/history">Completadas</Link>
              <Link to="/graphic">Gráfica</Link>
            </div>
          </Hidden>

          <Hidden smUp>
            <MenuIcon onClick={onOpen} className="cursor-pointer" />
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
