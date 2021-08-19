import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { useTimer } from 'core/hooks'
import { CheckIcon, PlayIcon, PauseIcon, StopIcon, ReloadIcon } from 'img'
import { useSnackbar } from '../utils'
import { ContainerActivity, TimeContent, Divider, Tooltip } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
  },
}))

export const CurrentActivity = () => {
  const classes = useStyles()
  const { successSnackbar } = useSnackbar()
  const { currentActivity, activities: itemsActivities } = useActivitiesState()
  const { setCurrentActivity, setActivities } = useActivitiesActions()

  const onCompleteActivity = timeElapsed => {
    const newItems = [...itemsActivities]
    const indexActivity = newItems.findIndex(item => item.id === currentActivity.id)
    newItems[indexActivity] = { ...newItems[indexActivity], isFinished: true, dateFinished: new Date(), timeElapsed }
    setActivities(newItems)
    setCurrentActivity(null)
    successSnackbar('Tarea completada')
  }

  const { timeRemaining, timeElapsed, isTimerRunning, start, pause, continueTimer, reset } = useTimer({ time: currentActivity?.time, onExpire: () => onCompleteActivity(currentActivity?.time) })

  React.useEffect(() => {
    if (currentActivity) {
      start()
    }

    return pause
  }, [currentActivity, start, pause])

  if (!currentActivity) return null

  return (
    <ContainerActivity variant="current">
      <div>{currentActivity.description}</div>

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
    </ContainerActivity>
  )
}
