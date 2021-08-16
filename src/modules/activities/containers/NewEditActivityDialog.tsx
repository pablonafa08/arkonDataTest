import React from 'react'
import { makeStyles } from '@material-ui/core'
import { uniqueId } from 'lodash'
import { ActivityItem } from 'core/context'
import { Input, Dialog } from '../lib'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}))

interface NewActivityProps {
  isOpen: boolean
  activityEdit: ActivityItem
  onClose: () => void
  onAdd: (value: ActivityItem) => void
  onEdit: (value: ActivityItem) => void
}

export const NewEditActivityDialog: React.FC<NewActivityProps> = ({ isOpen, activityEdit, onClose, onAdd, onEdit }) => {
  const classes = useStyles()
  const [inputValue, setInputValue] = React.useState(activityEdit?.description || '')

  const handleClick = () => {
    if (!inputValue) return
    if (!activityEdit) return onAdd({ id: uniqueId('activity-'), description: inputValue, time: '00:30' })
    onEdit({ ...activityEdit, description: inputValue, time: '00:30' })
  }

  return (
    <Dialog open={isOpen} title="Agregar nueva actividad" buttonPropsCancel={{ onClick: onClose }} buttonPropsOk={{ onClick: handleClick, disabled: !inputValue }}>
      <div className={classes.root}>
        <Input placeholder="Descripción" value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
        <Input type="time" />
      </div>
    </Dialog>
  )
}
