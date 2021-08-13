import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { useActivitiesState, useActivitiesActions } from '../context'
import { Activity } from '../lib'
import { NewActivity } from './NewActivity'

export const ActivitiesList = () => {
  const { activities: itemsActivities } = useActivitiesState()
  const { setActivities } = useActivitiesActions()

  const onAddActivity = value => {
    const newItems = [...itemsActivities]
    newItems.push(value)
    setActivities(newItems)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setActivities(arrayMove(itemsActivities, oldIndex, newIndex))
  }

  const ActivityItem = SortableElement(({ item }) => <Activity activity={item} />)

  const Activities = SortableContainer(({ items }) => (
    <ul>
      {items.map((item, index) => (
        <ActivityItem key={item} index={index} item={item} />
      ))}
    </ul>
  ))

  return (
    <div>
      <NewActivity onAdd={onAddActivity} />
      {itemsActivities.length ? <Activities items={itemsActivities} onSortEnd={onSortEnd} distance={1} lockAxis="y" useWindowAsScrollContainer useDragHandle /> : null}
    </div>
  )
}
