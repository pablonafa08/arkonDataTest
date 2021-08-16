import React from 'react'
import { TextField, TextFieldProps, withStyles, Grid } from '@material-ui/core'

export const StyledInput = withStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 5,
      color: theme.palette.primary.main,
      fontWeight: 300,
      backgroundColor: '#FFF',
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 20px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #E6E5E5',
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: '2px solid #E6E5E5',
      },
    },
    '& :hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: '2px solid #E6E5E5',
      },
    },
  },
}))(TextField)

export type InputElement = HTMLInputElement | HTMLTextAreaElement

export interface InputProps extends Omit<TextFieldProps, 'variant' | 'fullWidth'> {}

export const Input: React.FC<InputProps> = props => {
  return (
    <Grid item xs style={{ margin: 8, width: '100%' }}>
      <StyledInput variant="outlined" fullWidth {...props} />
    </Grid>
  )
}
