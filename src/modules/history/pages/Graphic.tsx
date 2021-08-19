import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Graphic, COLORS_BAR } from '../containers'

const TYPES_DURATION = ['Todos', 'Corto', 'Mediano', 'Largo']

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
  },
  circle: {
    width: 20,
    height: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    marginRight: 4,
  },
}))

export const GraphicPage = () => {
  const classes = useStyles()

  return (
    <>
      <div className="flex justify-center">
        {COLORS_BAR.map((color, index) => (
          <div key={`color-${color}`} className="flex items-center mr-2">
            <div className={classes.circle} style={{ backgroundColor: color }} /> {TYPES_DURATION[index]}
          </div>
        ))}
      </div>
      <div className={classes.root}>
        <Graphic />
      </div>
    </>
  )
}
