import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState } from 'core/context'
import { Graphic, COLORS_BAR } from '../containers'

const TYPES_DURATION = ['Total', 'Corto', 'Mediano', 'Largo']

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1000,
    },
  },
  contentSquares: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 120px))',
    maxWidth: 240,
    margin: 'auto',
    marginTop: 12,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      maxWidth: '100%',
      justifyContent: 'center',
      marginTop: 0,
      '& > .itemColor': {
        marginRight: 12,
      },
    },
  },
  square: {
    width: 20,
    height: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    marginRight: 4,
  },
}))

export const GraphicPage = () => {
  const classes = useStyles()
  const { activities } = useActivitiesState()
  const activitiesFinished = activities.filter(item => item.isFinished)

  const graphicAndColors = (
    <>
      <div className={classes.contentSquares}>
        {COLORS_BAR.map((color, index) => (
          <div key={`color-${color}`} className="flex items-center itemColor">
            <div className={classes.square} style={{ backgroundColor: color }} /> {TYPES_DURATION[index]}
          </div>
        ))}
      </div>

      <Graphic activitiesFinished={activitiesFinished} />
    </>
  )

  return <div className={classes.root}>{activitiesFinished.length ? graphicAndColors : 'No hay registros'}</div>
}
