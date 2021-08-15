import React from 'react'
import ButtonMaterial, { ButtonProps as ButtonMProps } from '@material-ui/core/Button'
import { styled, Theme } from '@material-ui/core'

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
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: 'none',
    backgroundColor: background && `${background} !important`,
    opacity: disabled ? 0.7 : 1,
    '&:hover': {
      boxShadow: '0px 0px 3px 1px #00000033'
    }
  }
})
