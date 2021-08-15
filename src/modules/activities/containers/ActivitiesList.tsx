import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { useActivitiesState, useActivitiesActions } from 'core/context'
import { Activity } from './Activity'

export const ActivitiesList = () => {
  const { activities: itemsActivities, currentActivity } = useActivitiesState()
  const { setActivities } = useActivitiesActions()

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setActivities(arrayMove(itemsActivities, oldIndex, newIndex))
  }

  const ActivityItem = SortableElement(({ item }) => <Activity activity={item} />)

  const Activities = SortableContainer(({ items }) => <ul>{items.map((item, index) => (currentActivity?.id !== item.id ? <ActivityItem key={item.id} index={index} item={item} /> : null))}</ul>)

  return <div>{itemsActivities.length ? <Activities items={itemsActivities} onSortEnd={onSortEnd} distance={1} lockAxis="y" useWindowAsScrollContainer useDragHandle /> : null}</div>
}
