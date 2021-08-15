import { Reducer } from 'react'
import { contextFactory } from 'core/utils'

export interface ActivityItem {
  id: string
  description: string
  time: string
  isFinished?: boolean
}

interface ActivitiesState {
  activities: ActivityItem[]
  currentActivity: ActivityItem
}

type ActivitiesActions = { type: 'SetActivities'; payload: ActivityItem[] } | { type: 'SetCurrentActivity'; payload: ActivityItem }

const makeState = () => ({
  activities: [],
  currentActivity: null,
})

const reducer: Reducer<ActivitiesState, ActivitiesActions> = (state, action) => {
  switch (action.type) {
    case 'SetActivities':
      return { ...state, activities: action.payload }
    case 'SetCurrentActivity':
      return { ...state, currentActivity: action.payload }
    default:
      return { ...state }
  }
}

const { WrappedProvider, useFactoryDispatch, useFactoryState } = contextFactory<ActivitiesState, ActivitiesActions>(reducer, makeState, 'ActivitiesContext')

export const ActivitiesProvider = WrappedProvider
export const useActivitiesDispatch = useFactoryDispatch
export const useActivitiesState = useFactoryState
