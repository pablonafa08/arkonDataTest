import React from 'react'
import { makeStyles, DialogProps as DialogPropsDefault, Dialog as DialogDefault, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { AcceptButton, CancelButton, DialogButtonProps } from './Button'

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: '10px',
  },
  dialogTitle: {
    background: '#F3F3F3',
    color: theme.palette.primary.main,
    textAlign: 'center',
    margin: 0,
    padding: 16,
    borderRadius: '10px 10px 0px 0px',
  },
  dialogContent: {
    padding: 16,
    '&::-webkit-scrollbar': {
      width: '6px',
      border: '1px solid #E6E5E5',
      borderRadius: '10px',
      background: 'transparent',
    },
    '&::-webkit-scrollbar-track': {
      display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '#E6E5E5',
    },
  },
  dialogActions: {
    margin: 0,
    padding: 16,
    justifyContent: 'space-around',
  },
}))

export interface DialogProps extends DialogPropsDefault {
  children: React.ReactNode
  title?: string
  hideButtonOk?: boolean
  hideButtonCancel?: boolean
  buttonOkLabel?: string
  buttonCancelLabel?: string
  buttonPropsOk?: DialogButtonProps
  buttonPropsCancel?: DialogButtonProps
  contentClass?: string
  actionsClass?: string
}

export const Dialog: React.FC<DialogProps> = ({ children, title, hideButtonOk = false, buttonOkLabel, hideButtonCancel = false, buttonCancelLabel, buttonPropsOk, buttonPropsCancel, contentClass, actionsClass, ...others }) => {
  const classes = useStyles()

  return (
    <DialogDefault classes={{ paper: clsx(classes.dialog, others.className) }} data-testid="dialog" aria-labelledby="customized-dialog-title" {...others}>
      <DialogTitle id="customized-dialog-title" disableTypography className={classes.dialogTitle}>
        <Typography style={{ fontWeight: 600 }}>{title}</Typography>
      </DialogTitle>

      <DialogContent className={clsx(classes.dialogContent, contentClass)}>{children}</DialogContent>

      <DialogActions className={clsx(classes.dialogActions, actionsClass)}>
        {!hideButtonCancel ? <CancelButton {...buttonPropsCancel}>{buttonCancelLabel ? buttonCancelLabel : 'Cancelar'}</CancelButton> : null}
        {!hideButtonOk ? <AcceptButton {...buttonPropsOk}>{buttonOkLabel ? buttonOkLabel : 'Aceptar'}</AcceptButton> : null}
      </DialogActions>
    </DialogDefault>
  )
}
