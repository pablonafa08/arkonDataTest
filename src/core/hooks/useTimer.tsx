import React from 'react'
import { parse, subSeconds, format, startOfDay, differenceInSeconds } from 'date-fns'

const NOW = new Date()

const getTimeFormated = (time, timeElapsed) => {
  if (!time) return null

  const newDate = subSeconds(parse(time, 'HH:mm', NOW), timeElapsed)
  const seconds = differenceInSeconds(newDate, startOfDay(NOW))

  return { secondsLeft: seconds, timeFormat: format(newDate, 'HH:mm:ss') }
}

interface TimerProps {
  time: string
  onExpire?: () => void
}

export const useTimer = ({ time, onExpire }: TimerProps) => {
  const [isTimerRunning, setTimerRunning] = React.useState(false)
  const [timeElapsed, setTimeElapsed] = React.useState(0)

  const currentTime = getTimeFormated(time, timeElapsed)

  React.useEffect(() => {
    let interval
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(value => value + 1)
      }, 1000)
    }

    return () => {
      if (isTimerRunning) clearInterval(interval)
    }
  }, [isTimerRunning])

  React.useEffect(() => {
    if (currentTime?.secondsLeft <= 0) {
      pause()
      onExpire && onExpire()
    }
    // eslint-disable-next-line
  }, [timeElapsed])

  const start = React.useCallback(() => {
    setTimeElapsed(0)
    setTimerRunning(true)
  }, [])

  const pause = React.useCallback(() => setTimerRunning(false), [])
  const continueTimer = React.useCallback(() => setTimerRunning(true), [])
  const reset = React.useCallback(() => setTimeElapsed(0), [])

  return {
    currentTime: currentTime?.timeFormat,
    isTimerRunning,
    start,
    pause,
    continueTimer,
    reset,
  }
}
