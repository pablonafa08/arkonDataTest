import React from 'react'
import { makeStyles } from '@material-ui/core'
import { SortableHandle } from 'react-sortable-hoc'
import { TwoLinesIcon, CheckIcon, PencilIcon, TrashIcon, PlayIcon, ReloadIcon } from 'img'
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
  const { setCurrentActivity } = useActivitiesActions()

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
        <PencilIcon className={classes.icon} />
        <TrashIcon className={classes.icon} />
      </div>
    </ContainerActivity>
  )
}
