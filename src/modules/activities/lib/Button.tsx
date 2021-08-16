import React from 'react'
import { styled, Theme, Button as ButtonMaterial, ButtonProps as ButtonMProps } from '@material-ui/core'

/*************************** Base Button ***************************/
export type ButtonProps = ButtonMProps
export const Button = styled((props: ButtonMProps) => <ButtonMaterial {...props} />)<Theme, ButtonProps>(({ color, disabled = false, theme, variant }) => {
  let background: string

  if (disabled && color && variant !== 'outlined') {
    background = theme.palette[color]['500']
  }

  return {
    textAlign: 'center',
    width: '100%',
    borderRadius: 35,
    fontSize: 14,
    fontWeight: 500,
    boxShadow: 'none',
    backgroundColor: background && `${background} !important`,
    opacity: disabled ? 0.7 : 1,
    textTransform: 'none',
    '&:hover': {
      boxShadow: '0px 0px 3px 1px #00000033',
    },
  }
})

/*************************** Dialog button costum ***************************/

export const DialogButton = styled(Button)({
  fontSize: 14,
  padding: '5px 25px ',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 400,
  marginBottom: '20px',
  boxShadow: 'none',
  width: 111,
})

export type DialogButtonProps = Omit<ButtonProps, 'variant' | 'color'>

export const AcceptButton = styled((props: DialogButtonProps) => <DialogButton variant="contained" color="primary" {...props} />)(({ theme }) => ({
  color: '#FFF',
}))

export const CancelButton = styled((props: DialogButtonProps) => <DialogButton variant="outlined" color="primary" {...props} />)(({ theme }) => ({
  color: theme.palette.primary.main,
}))
