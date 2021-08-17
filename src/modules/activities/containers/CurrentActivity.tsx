import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState } from 'core/context'
import { useTimer } from 'core/hooks'
import { CheckIcon, PlayIcon, PauseIcon, StopIcon, ReloadIcon } from 'img'
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

  const onExpireTime = () => {
    console.log('Tarea terminada')
  }

  const { currentTime, isTimerRunning, start, pause, continueTimer, reset } = useTimer({ time: currentActivity?.time, onExpire: onExpireTime })

  React.useEffect(() => {
    if (currentActivity) {
      start()
    }
  }, [currentActivity, start])

  if (!currentActivity) return null

  return (
    <ContainerActivity variant="current">
      <div>{currentActivity.description}</div>

      <div className="flex items-center">
        <TimeContent variant="current">{currentTime || currentActivity.time}</TimeContent>
        <CheckIcon className={classes.icon} />

        <Divider variant="current" />
        {isTimerRunning ? <PauseIcon className={classes.icon} onClick={pause} /> : <PlayIcon className={classes.icon} onClick={continueTimer} />}
        <StopIcon className={classes.icon} />
        <ReloadIcon className={classes.icon} onClick={reset} />
      </div>
    </ContainerActivity>
  )
}
