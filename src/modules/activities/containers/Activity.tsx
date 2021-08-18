import React from 'react'
import { makeStyles } from '@material-ui/core'
import { SortableHandle } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { TwoLinesIcon, CheckIcon, PencilIcon, TrashIcon, PlayIcon } from 'img'
import { useActivitiesState, useActivitiesActions, ActivityItem } from 'core/context'
import { ContainerActivity, TimeContent, Divider } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
  },
}))

interface ActivityProps {
  activity: ActivityItem
  index?: number
}

export const Activity: React.FC<ActivityProps> = ({ activity, index }) => {
  const classes = useStyles()
  const { activities: itemsActivities } = useActivitiesState()
  const { setCurrentActivity, setActivities, setOpenAddEditDialog, setOpenDeleteDialog } = useActivitiesActions()

  const onPlayActivity = () => {
    setCurrentActivity(activity)
    setActivities(arrayMove(itemsActivities, index, 0))
  }

  const onCompleteActivity = () => {
    const newItems = [...itemsActivities]
    newItems[index] = { ...newItems[index], isFinished: true, dateFinished: new Date(), timeElapsed: '00:00:00' }
    setActivities(newItems)
  }

  const DragHandle = SortableHandle(() => <TwoLinesIcon className="mr-4 cursor-pointer" />)

  return (
    <ContainerActivity>
      <div className="flex items-center">
        <DragHandle /> {activity.description}
      </div>

      <div className="flex items-center">
        <TimeContent>{activity.time}</TimeContent>
        <CheckIcon className={classes.icon} onClick={onCompleteActivity} />

        <Divider />
        <PlayIcon className={classes.icon} onClick={onPlayActivity} />

        <Divider />
        <PencilIcon className={classes.icon} onClick={() => setOpenAddEditDialog(activity)} />
        <TrashIcon className={classes.icon} onClick={() => setOpenDeleteDialog(activity)} />
      </div>
    </ContainerActivity>
  )
}
