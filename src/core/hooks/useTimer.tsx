import React from 'react'
import { parse, addSeconds, subSeconds, format, startOfDay, differenceInSeconds } from 'date-fns'

const NOW = new Date()

const getTimeFormated = (time, timeElapsedInSeconds) => {
  if (!time) return null

  try {
    const newDateRemaining = subSeconds(parse(time, 'HH:mm:ss', NOW), timeElapsedInSeconds) // time remaining - data type `Date`
    const secondsLeft = differenceInSeconds(newDateRemaining, startOfDay(NOW)) // Number of seconds remaining
    const newDateElapsed = addSeconds(startOfDay(NOW), timeElapsedInSeconds) // time elapsed - data type `Date`

    return { secondsLeft, timeRemainingFormat: format(newDateRemaining, 'HH:mm:ss'), timeElapsedFormat: format(newDateElapsed, 'HH:mm:ss') }
  } catch {
    return null
  }
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
    timeRemaining: currentTime?.timeRemainingFormat,
    timeElapsed: currentTime?.timeElapsedFormat,
    isTimerRunning,
    start,
    pause,
    continueTimer,
    reset,
  }
}
