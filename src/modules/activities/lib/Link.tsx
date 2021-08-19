import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    marginRight: 8,
  },
}))

export interface LinkProps {
  to: string
}

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const classes = useStyles()

  return (
    <RouterLink to={to} className={classes.root}>
      {children}
    </RouterLink>
  )
}
