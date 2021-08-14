import React from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import { TwoLinesIcon, CheckIcon, PencilIcon, TrashIcon, PlayIcon, PauseIcon, StopIcon, ReloadIcon } from 'img'
import { ActivityItem } from '../context'
import { ContainerActivity } from './ActivityList'

interface ActivityProps {
  activity: ActivityItem
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
  const DragHandle = SortableHandle(() => <TwoLinesIcon className="mr-4 cursor-pointer" />)

  return (
    <ContainerActivity>
      <DragHandle /> {activity.description}
      <div>{activity.time}</div>
      <CheckIcon />
      <PencilIcon />
      <TrashIcon />
      <PlayIcon />
      <PauseIcon />
      <StopIcon />
      <ReloadIcon />
    </ContainerActivity>
  )
}
