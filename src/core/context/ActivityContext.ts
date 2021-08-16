import { Reducer } from 'react'
import { contextFactory } from 'core/utils'

export type DefaultDuration = 'short' | 'medium' | 'long'

export interface ActivityItem {
  id: string
  description: string
  time: string
  typeDefaultDuration?: DefaultDuration
  isCustomDuration: boolean
  hours: number
  minutes: number
  isFinished?: boolean
}

export type OpenDialogType = 'addEdit' | 'delete'

interface ActivitiesState {
  activities: ActivityItem[]
  currentActivity: ActivityItem
  openDialog: OpenDialogType
  activityEditDelete: ActivityItem
}

type ActivitiesActions =
  | { type: 'SetActivities'; payload: ActivityItem[] }
  | { type: 'SetCurrentActivity'; payload: ActivityItem }
  | { type: 'SetOpenAddEditDialog'; payload?: ActivityItem }
  | { type: 'SetOpenDeleteDialog'; payload: ActivityItem }
  | { type: 'SetCloseDialog' }

const makeState = () => ({
  activities: [],
  currentActivity: null,
  openDialog: null,
  activityEditDelete: null,
})

const reducer: Reducer<ActivitiesState, ActivitiesActions> = (state, action) => {
  switch (action.type) {
    case 'SetActivities':
      return { ...state, activities: action.payload }
    case 'SetCurrentActivity':
      return { ...state, currentActivity: action.payload }
    case 'SetOpenAddEditDialog':
      return { ...state, openDialog: 'addEdit', activityEditDelete: action.payload }
    case 'SetOpenDeleteDialog':
      return { ...state, openDialog: 'delete', activityEditDelete: action.payload }
    case 'SetCloseDialog':
      return { ...state, openDialog: null, activityEditDelete: null }
    default:
      return { ...state }
  }
}

const { WrappedProvider, useFactoryDispatch, useFactoryState } = contextFactory<ActivitiesState, ActivitiesActions>(reducer, makeState, 'ActivitiesContext')

export const ActivitiesProvider = WrappedProvider
export const useActivitiesDispatch = useFactoryDispatch
export const useActivitiesState = useFactoryState
