import React from 'react'
import { compareAsc } from 'date-fns'
import { useActivitiesState } from 'core/context'
import { ActivityComplete } from './ActivityComplete'

export const HistoryList = () => {
  const { activities } = useActivitiesState()
  const activitiesFinished = activities.filter(item => item.isFinished).sort((a, b) => compareAsc(a.dateFinished, b.dateFinished))

  return (
    <div>
      <div>Historial</div>

      {activitiesFinished.map(item => (
        <ActivityComplete key={item.id} item={item} />
      ))}
    </div>
  )
}
