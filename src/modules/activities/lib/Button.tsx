import React from 'react'
import { Button as ButtonMateral, ButtonProps as ButtonMateralProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 50,
    padding: 8,
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    '&.Mui-disabled': {
      color: theme.palette.primary.main,
      opacity: 0.5,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}))

export interface ButtonProps extends ButtonMateralProps {}

export const Button: React.FC<ButtonProps> = props => {
  const classes = useStyles()

  return <ButtonMateral className={clsx(classes.root, props.className)} fullWidth {...props} />
}
