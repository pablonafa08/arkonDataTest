import React from 'react'
import { ActivitiesProvider } from '../context'
import { ActivitiesList } from '../containers'

export const ActivitiesListPage = () => {
  return (
    <ActivitiesProvider>
      <ActivitiesList />
    </ActivitiesProvider>
  )
}
