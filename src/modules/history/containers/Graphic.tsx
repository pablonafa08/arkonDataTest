import { format } from 'date-fns'
import { assign } from 'lodash'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from 'victory'
import { useActivitiesState } from 'core/context'
import { getDaysOfLastWeek, getActivitiesByDateAndTypeDuration } from '../utils'

const NEW_THEME = VictoryTheme.grayscale
assign(NEW_THEME.axis.style.tickLabels, { fontSize: 9, fill: '#817E7E' })

const DAYS_LAST_WEEK = getDaysOfLastWeek().reverse()

export const Graphic = () => {
  const { activities } = useActivitiesState()
  const daysFormated = DAYS_LAST_WEEK.map(day => format(day, 'dd-MM-yyyy'))
  const activitiesFinished = activities.filter(item => item.isFinished)

  const { getActivitiesOfWeekByType, getTotalActivitiesByDate } = getActivitiesByDateAndTypeDuration(activitiesFinished, DAYS_LAST_WEEK)

  const actByTypeDuration = {
    short: getActivitiesOfWeekByType('short'),
    medium: getActivitiesOfWeekByType('medium'),
    long: getActivitiesOfWeekByType('long'),
    all: getTotalActivitiesByDate(),
  }

  return (
    <VictoryChart theme={NEW_THEME} domainPadding={{ x: 20 }}>
      <VictoryGroup offset={10} colorScale={['#293462', '#067AE0', '#93A0D2', '#FFF']} style={{ data: { stroke: '#293462', strokeWidth: 1 } }}>
        <VictoryBar data={actByTypeDuration.all.map((value, index) => ({ x: daysFormated[index], y: value }))} labels={({ datum }) => datum.y} />
        <VictoryBar data={actByTypeDuration.short.map((value, index) => ({ x: daysFormated[index], y: value }))} labels={({ datum }) => datum.y} />
        <VictoryBar data={actByTypeDuration.medium.map((value, index) => ({ x: daysFormated[index], y: value }))} labels={({ datum }) => datum.y} />
        <VictoryBar data={actByTypeDuration.long.map((value, index) => ({ x: daysFormated[index], y: value }))} labels={({ datum }) => datum.y} />
      </VictoryGroup>
    </VictoryChart>
  )
}
