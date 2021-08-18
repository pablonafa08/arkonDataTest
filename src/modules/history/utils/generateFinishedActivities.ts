import { uniqueId } from 'lodash'
import { subDays } from 'date-fns'
import { ActivityItem, DefaultDuration } from 'core/context'
import { TIMES_VALUE } from 'modules/activities/containers/NewEditActivityDialog'

const TIMES_VALUE_80 = {
  short: '00:24:00',
  medium: '00:36:00',
  long: '00:48:00',
}

const NUM_ITEMS = new Array(10).fill(0).map((_, i) => i + 1)
const TYPES_DURATION: DefaultDuration[] = ['short', 'medium', 'long']

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const getDaysOfLastWeek = () => {
  const NOW = new Date()

  const itemsDays = [NOW]
  for (let i = 1; i < 7; i++) {
    itemsDays.push(subDays(NOW, i))
  }
  return itemsDays
}

export const generateFinishedActivities = numberRange => {
  const daysOfLastWeek = getDaysOfLastWeek()

  const newItems: ActivityItem[] = NUM_ITEMS.map(i => {
    const randomTypeDuration = TYPES_DURATION[getRandomInt(0, 3)]

    return {
      id: uniqueId('AutoActivity-'),
      description: `Actividad autogenerada ${numberRange * 10 + i}`,
      time: TIMES_VALUE[randomTypeDuration],
      typeDefaultDuration: randomTypeDuration,
      isFinished: true,
      dateFinished: daysOfLastWeek[getRandomInt(0, 7)],
      timeElapsed: getRandomInt(0, 2) ? TIMES_VALUE[randomTypeDuration] : TIMES_VALUE_80[randomTypeDuration],
      isCustomDuration: false,
      hours: 0,
      minutes: 0,
    }
  })

  return newItems
}
