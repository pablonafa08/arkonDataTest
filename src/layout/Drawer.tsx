import { makeStyles, Drawer as DrawerMaterial, Toolbar } from '@material-ui/core'
import { MenuIcon } from 'img'
import { Link } from 'modules/activities/lib'
import { HEADER_HEIGHT } from './Header'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
    height: '100%',
    color: '#FFF',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    height: HEADER_HEIGHT,
    padding: '0 20px',
    borderBottom: '1px solid #FFF',
    boxShadow: '0 0 10px 0 #FFF',
  },
  itemLink: {
    borderBottom: '1px solid #FFF',
    padding: '10px 20px',
  },
}))

export const Drawer = ({ isOpen, onClose }) => {
  const classes = useStyles()

  return (
    <DrawerMaterial anchor="left" open={isOpen}>
      <div className={classes.root}>
        <Toolbar className={classes.title}>
          <span className="text-xl font-semibold">Listado de tareas</span>
          <MenuIcon onClick={onClose} className="cursor-pointer" />
        </Toolbar>

        <div className={classes.itemLink}>
          <Link to="/" onClick={onClose}>
            Pendientes
          </Link>
        </div>

        <div className={classes.itemLink}>
          <Link to="/history" onClick={onClose}>
            Completadas
          </Link>
        </div>

        <div className={classes.itemLink}>
          <Link to="/graphic" onClick={onClose}>
            Gráfica
          </Link>
        </div>
      </div>
    </DrawerMaterial>
  )
}
