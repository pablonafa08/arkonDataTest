import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Header, HEADER_HEIGHT } from './Header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#E6E5E5',
  },
  main: {
    flexGrow: 1,
    padding: 12,
    margin: 12,
    marginTop: HEADER_HEIGHT + 12,
    borderRadius: 10,
    boxShadow: '0px 3px 6px #00000029',
    backgroundColor: '#FFF',
    minHeight: `calc(100vh - ${HEADER_HEIGHT + 24}px)`,
    [theme.breakpoints.up('sm')]: {
      padding: 40,
      margin: 20,
      marginTop: HEADER_HEIGHT + 20,
      minHeight: `calc(100vh - ${HEADER_HEIGHT + 40}px)`,
    },
  },
}))

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.main}>{children}</main>
    </div>
  )
}
