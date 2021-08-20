import React from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { useTimer } from 'core/hooks'
import { CheckIcon, PlayIcon, PauseIcon, StopIcon, ReloadIcon } from 'img'
import { useSnackbar } from '../utils'
import { ContainerActivity, ContentDataActivity, TimeContent, Divider, Tooltip } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
    flexShrink: 0,
  },
}))

export const CurrentActivity = () => {
  const classes = useStyles()
  const { successSnackbar } = useSnackbar()
  const { currentActivity, activities: itemsActivities } = useActivitiesState()
  const { setCurrentActivity, setActivities } = useActivitiesActions()

  // mark current activity as completed
  const onCompleteActivity = timeElapsed => {
    const newItems = [...itemsActivities]
    const indexActivity = newItems.findIndex(item => item.id === currentActivity.id)
    newItems[indexActivity] = { ...newItems[indexActivity], isFinished: true, dateFinished: new Date(), timeElapsed }
    setActivities(newItems)
    setCurrentActivity(null)
    successSnackbar('Tarea completada')
  }

  // use of timer
  const { timeRemaining, timeElapsed, isTimerRunning, start, pause, continueTimer, reset } = useTimer({ time: currentActivity?.time, onExpire: () => onCompleteActivity(currentActivity?.time) })

  // start timer when component is mounted and stop when is unmounted
  React.useEffect(() => {
    if (currentActivity) {
      start()
    }

    return pause
  }, [currentActivity, start, pause])

  if (!currentActivity) return null

  return (
    <ContainerActivity variant="current">
      <ContentDataActivity>
        <div>{currentActivity.description}</div>

        <Hidden smUp>
          <Divider orientation="horizontal" variant="current" />
        </Hidden>

        <div className="flex items-center">
          <TimeContent variant="current">{timeRemaining || currentActivity.time}</TimeContent>
          <Tooltip title="Marcar tarea como completada">
            <CheckIcon className={classes.icon} onClick={() => onCompleteActivity(timeElapsed)} />
          </Tooltip>

          <Divider variant="current" />

          {isTimerRunning ? (
            <Tooltip title="Pausar tarea">
              <PauseIcon className={classes.icon} onClick={pause} />
            </Tooltip>
          ) : (
            <Tooltip title="Continuar tarea">
              <PlayIcon className={classes.icon} onClick={continueTimer} />
            </Tooltip>
          )}

          <Tooltip title="Detener tarea">
            <StopIcon className={classes.icon} onClick={() => setCurrentActivity(null)} />
          </Tooltip>
          <Tooltip title="Reiniciar tarea">
            <ReloadIcon className={classes.icon} onClick={reset} />
          </Tooltip>
        </div>
      </ContentDataActivity>
    </ContainerActivity>
  )
}
