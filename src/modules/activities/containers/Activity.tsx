import React from 'react'
import { makeStyles } from '@material-ui/core'
import { SortableHandle } from 'react-sortable-hoc'
import { TwoLinesIcon, CheckIcon, PencilIcon, TrashIcon, PlayIcon } from 'img'
import { useActivitiesActions, ActivityItem } from 'core/context'
import { ContainerActivity, TimeContent, Divider } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
  },
}))

interface ActivityProps {
  activity: ActivityItem
}

export const Activity: React.FC<ActivityProps> = ({ activity }) => {
  const classes = useStyles()
  const { setCurrentActivity, setOpenAddEditDialog, setOpenDeleteDialog } = useActivitiesActions()

  const DragHandle = SortableHandle(() => <TwoLinesIcon className="mr-4 cursor-pointer" />)

  return (
    <ContainerActivity>
      <div className="flex items-center">
        <DragHandle /> {activity.description}
      </div>

      <div className="flex items-center">
        <TimeContent>{activity.time}</TimeContent>
        <CheckIcon className={classes.icon} />

        <Divider />
        <PlayIcon className={classes.icon} onClick={() => setCurrentActivity(activity)} />

        <Divider />
        <PencilIcon className={classes.icon} onClick={() => setOpenAddEditDialog(activity)} />
        <TrashIcon className={classes.icon} onClick={() => setOpenDeleteDialog(activity)} />
      </div>
    </ContainerActivity>
  )
}
