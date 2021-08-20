import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { canSeeActivity } from '../utils'
import { Activity } from './Activity'

export const ActivitiesList = ({ filter = 'all' }) => {
  const { activities: itemsActivities, currentActivity } = useActivitiesState()
  const { setActivities } = useActivitiesActions()

  // when dropping the item it is rearranged in the array
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setActivities(arrayMove(itemsActivities, oldIndex, newIndex))
  }

  // draggable item
  const ActivityItem = SortableElement(({ item, indexItem }) => <Activity activity={item} index={indexItem} />)

  // drag n drop area
  const Activities = SortableContainer(({ items }) => (
    <ul>
      {items.map((item, index) => {
        const isNotFinished = currentActivity?.id !== item.id && !item.isFinished
        return canSeeActivity(item, isNotFinished, filter) ? <ActivityItem key={item.id} index={index} item={item} indexItem={index} /> : null
      })}
    </ul>
  ))

  return <Activities items={itemsActivities} onSortEnd={onSortEnd} distance={1} lockAxis="y" useWindowAsScrollContainer useDragHandle />
}
