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

  const ActivityItem = SortableElement(({ item, indexItem }) => <Activity activity={item} index={indexItem} />)

  const Activities = SortableContainer(({ items }) => <ul>{items.map((item, index) => (currentActivity?.id !== item.id && !item.isFinished ? <ActivityItem key={item.id} index={index} item={item} indexItem={index} /> : null))}</ul>)

  return <div>{itemsActivities.length ? <Activities items={itemsActivities} onSortEnd={onSortEnd} distance={1} lockAxis="y" useWindowAsScrollContainer useDragHandle /> : null}</div>
}
