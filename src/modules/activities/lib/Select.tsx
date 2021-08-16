import React from 'react'
import { makeStyles, Grid, FormControl, InputLabel, Select as SelectMaterial, SelectProps as SelectMaterialProps } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 8,
    paddingRight: 8,
    width: '100%',
  },
  menuPaper: {
    maxHeight: 250,
  },
}))

interface SelectProps extends SelectMaterialProps {
  label: string
}

export const Select: React.FC<SelectProps> = ({ children, label, ...props }) => {
  const classes = useStyles()

  return (
    <Grid item xs>
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <SelectMaterial MenuProps={{ classes: { paper: classes.menuPaper } }} {...props}>
          {children}
        </SelectMaterial>
      </FormControl>
    </Grid>
  )
}
