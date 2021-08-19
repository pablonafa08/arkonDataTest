import React from 'react'
import { makeStyles, Tooltip as MaterialTooltip, TooltipProps } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.primary.main,
    '&:before': {
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.1)',
    },
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    fontSize: 12,
    padding: '.5rem',
    color: '#fff',
  },
  tooltipArrow: {
    boxShadow: '1px 1px 7px 3px #00000029',
  },
}))

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <MaterialTooltip arrow classes={classes} {...props}>
      <div>{children}</div>
    </MaterialTooltip>
  )
}
