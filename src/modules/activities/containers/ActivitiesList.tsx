import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { Activity } from '../lib'

export const ActivitiesList = () => {
  const [itemsActivities, setActivities] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setActivities(arrayMove(itemsActivities, oldIndex, newIndex))
  }

  const ActivityItem = SortableElement(({ item }) => <Activity activity={`Activity item ${item}`} />)

  const Activities = SortableContainer(({ items }) => (
    <ul>
      {items.map((item, index) => (
        <ActivityItem key={item} index={index} item={item} />
      ))}
    </ul>
  ))

  return <div>{itemsActivities.length ? <Activities items={itemsActivities} onSortEnd={onSortEnd} distance={1} lockAxis="y" useWindowAsScrollContainer useDragHandle /> : null}</div>
}
