import { Reducer } from 'react'
import { contextFactory } from 'core/utils'

export interface ActivityItem {
  description: string
  time: string
}

interface ActivitiesState {
  activities: ActivityItem[]
}

type ActivitiesActions = { type: 'SetActivities'; payload: ActivityItem[] }

const makeState = () => ({
  activities: [],
})

const reducer: Reducer<ActivitiesState, ActivitiesActions> = (state, action) => {
  switch (action.type) {
    case 'SetActivities':
      return { ...state, activities: action.payload }
    default:
      return { ...state }
  }
}

const { WrappedProvider, useFactoryDispatch, useFactoryState } = contextFactory<ActivitiesState, ActivitiesActions>(reducer, makeState, 'ActivitiesContext')

export const ActivitiesProvider = WrappedProvider
export const useActivitiesDispatch = useFactoryDispatch
export const useActivitiesState = useFactoryState
