import React from 'react'
import { compareAsc } from 'date-fns'
import { useActivitiesState } from 'core/context'
import { NoResultsMessage } from 'modules/activities/lib'
import { TopContentHistotyList } from './TopContentHistotyList'
import { ActivityComplete } from './ActivityComplete'

export const HistoryList = () => {
  const { activities } = useActivitiesState()
  const activitiesFinished = activities.filter(item => item.isFinished).sort((a, b) => compareAsc(a.dateFinished, b.dateFinished))

  return (
    <>
      {/* ***** Top of page (Num results and button to generate random completed activities) ***** */}
      <TopContentHistotyList activitiesFinished={activitiesFinished} />

      {/* ***** list of completed activities ***** */}
      {activitiesFinished.length ? activitiesFinished.map(item => <ActivityComplete key={item.id} item={item} />) : <NoResultsMessage>No hay tareas completadas</NoResultsMessage>}
    </>
  )
}
