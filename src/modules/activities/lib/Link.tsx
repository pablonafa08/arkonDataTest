import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    marginRight: 12,
  },
}))

export interface LinkProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  to: string
}

export const Link: React.FC<LinkProps> = ({ to, children, ...othersProps }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <span {...othersProps}>
      <RouterLink to={to} className={clsx(classes.root, { underline: location.pathname === to })}>
        {children}
      </RouterLink>
    </span>
  )
}
