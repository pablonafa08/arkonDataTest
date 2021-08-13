import React from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import { TwoLinesIcon } from 'img'
import { ContainerActivity } from './ActivityList'

export const Activity = ({ activity }) => {
  const DragHandle = SortableHandle(() => <TwoLinesIcon className="mr-4 cursor-pointer" />)

  return (
    <ContainerActivity>
      <DragHandle /> {activity}
    </ContainerActivity>
  )
}
