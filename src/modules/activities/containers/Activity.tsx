import React from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import { SortableHandle } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { TwoLinesIcon, CheckIcon, PencilIcon, TrashIcon, PlayIcon } from 'img'
import { useActivitiesState, useActivitiesActions, ActivityItem } from 'core/context'
import { useSnackbar } from '../utils'
import { ContainerActivity, ContentDataActivity, TimeContent, Divider, Tooltip } from '../lib'

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 12,
    cursor: 'pointer',
    flexShrink: 0,
  },
}))

interface ActivityProps {
  activity: ActivityItem
  index?: number
}

export const Activity: React.FC<ActivityProps> = ({ activity, index }) => {
  const classes = useStyles()
  const { successSnackbar } = useSnackbar()
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
    successSnackbar('Tarea completada')
  }

  const DragHandle = SortableHandle(() => <TwoLinesIcon className="mr-4 cursor-pointer flex-shrink-0" />)

  return (
    <ContainerActivity>
      <DragHandle />

      <ContentDataActivity>
        <div className="flex items-center">{activity.description}</div>

        <Hidden smUp>
          <Divider orientation="horizontal" />
        </Hidden>

        <div className="flex items-center">
          <TimeContent>{activity.time}</TimeContent>
          <Tooltip title="Marcar tarea como completada">
            <CheckIcon className={classes.icon} onClick={onCompleteActivity} />
          </Tooltip>

          <Divider />
          <Tooltip title="Iniciar tarea">
            <PlayIcon className={classes.icon} onClick={onPlayActivity} />
          </Tooltip>

          <Divider />
          <Tooltip title="Modificar tarea">
            <PencilIcon className={classes.icon} onClick={() => setOpenAddEditDialog(activity)} />
          </Tooltip>
          <Tooltip title="Eliminar tarea">
            <TrashIcon className={classes.icon} onClick={() => setOpenDeleteDialog(activity)} />
          </Tooltip>
        </div>
      </ContentDataActivity>
    </ContainerActivity>
  )
}
