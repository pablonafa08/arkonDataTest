import { format } from 'date-fns'
import { assign } from 'lodash'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from 'victory'
import { getDaysOfLastWeek, getActivitiesByDateAndTypeDuration } from '../utils'

export const COLORS_BAR = ['#293462', '#067AE0', '#93A0D2', '#FFF']
const DAYS_LAST_WEEK = getDaysOfLastWeek().reverse() // get the days of the last week from the current day
const DAYS_FORMATED = DAYS_LAST_WEEK.map(day => format(day, 'dd-MM-yyyy'))

const NEW_THEME = VictoryTheme.grayscale // gets the current theme of the chart
assign(NEW_THEME.axis.style.tickLabels, { fontSize: 9, fill: '#817E7E' }) // assign new styles to the theme

export const Graphic = ({ activitiesFinished = [] }) => {
  // hook to obtain the totals of the completed tasks
  // they are obtained for each type of duration and for each day of the last week
  const { getActivitiesOfWeekByType, getTotalActivitiesByDate } = getActivitiesByDateAndTypeDuration(activitiesFinished, DAYS_LAST_WEEK)

  // totals of tasks completed in the last week
  const actByTypeDuration = {
    short: getActivitiesOfWeekByType('short'), // `short` duration type
    medium: getActivitiesOfWeekByType('medium'), // `medium` duration type
    long: getActivitiesOfWeekByType('long'), // `long` duration type
    all: getTotalActivitiesByDate(), // all types of duration
  }

  return (
    <VictoryChart theme={NEW_THEME} domainPadding={{ x: 20 }}>
      <VictoryGroup offset={10} colorScale={COLORS_BAR} style={{ data: { stroke: '#293462', strokeWidth: 1 } }}>
        {/* shows the bars of the totals for each day of the 3 types of duration ↓↓↓↓↓*/}
        <VictoryBar data={actByTypeDuration.all.map((value, index) => ({ x: DAYS_FORMATED[index], y: value }))} labels={({ datum }) => datum.y} />
        {/* shows the bars of the totals for each day of the `short` duration type ↓↓↓↓↓ */}
        <VictoryBar data={actByTypeDuration.short.map((value, index) => ({ x: DAYS_FORMATED[index], y: value }))} labels={({ datum }) => datum.y} />
        {/* shows the bars of the totals for each day of the `medium` duration type ↓↓↓↓↓ */}
        <VictoryBar data={actByTypeDuration.medium.map((value, index) => ({ x: DAYS_FORMATED[index], y: value }))} labels={({ datum }) => datum.y} />
        {/* shows the bars of the totals for each day of the `long` duration type ↓↓↓↓↓ */}
        <VictoryBar data={actByTypeDuration.long.map((value, index) => ({ x: DAYS_FORMATED[index], y: value }))} labels={({ datum }) => datum.y} />
      </VictoryGroup>
    </VictoryChart>
  )
}
