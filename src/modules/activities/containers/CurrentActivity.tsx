import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState } from 'core/context'
import { CheckIcon, PencilIcon, TrashIcon, PauseIcon, StopIcon, ReloadIcon } from 'img'
import { ContainerActivity, TimeContent, Divider } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
  },
}))

export const CurrentActivity = () => {
  const classes = useStyles()
  const { currentActivity } = useActivitiesState()

  if (!currentActivity) return null

  return (
    <ContainerActivity variant="current">
      <div>{currentActivity.description}</div>

      <div className="flex items-center">
        <TimeContent variant="current">{currentActivity.time}</TimeContent>
        <CheckIcon className={classes.icon} />

        <Divider variant="current" />
        <PauseIcon className={classes.icon} />
        <StopIcon className={classes.icon} />
        <ReloadIcon className={classes.icon} />
        
        <Divider variant="current" />
        <PencilIcon className={classes.icon} />
        <TrashIcon className={classes.icon} />

     
      </div>
    </ContainerActivity>
  )
}
