import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { uniqueId } from 'lodash'
import { AddIcon } from 'img'
import { ActivityItem } from 'core/context'
import { Input } from '../lib'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    opacity: 0.5,
    cursor: 'default',
    flexShrink: 0,
    width: 25,
    height: 25,
    margin: 8,
    '&.active': {
      opacity: 1,
      cursor: 'pointer',
    },
  },
}))

interface NewActivityProps {
  onAdd: (value: ActivityItem) => void
}

export const NewActivity: React.FC<NewActivityProps> = ({ onAdd }) => {
  const classes = useStyles()
  const [inputValue, setInputValue] = React.useState('')

  const handleClick = () => {
    if (!inputValue) return
    onAdd({ id: uniqueId('activity-'), description: inputValue, time: '00:30' })
    setInputValue('')
  }

  return (
    <div className={classes.root}>
      <Input placeholder="Descripción" value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      <Input type="time" />

      <AddIcon className={clsx(classes.button, { active: !!inputValue })} onClick={handleClick} />
    </div>
  )
}
