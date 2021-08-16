import React from 'react'
import { makeStyles, FormControlLabel, Checkbox, RadioGroup, Radio, Grid, MenuItem } from '@material-ui/core'
import { uniqueId } from 'lodash'
import { ActivityItem, DefaultDuration } from 'core/context'
import { Input, Dialog, Select } from '../lib'

const TIMES_VALUE = {
  short: '00:30',
  medium: '00:45',
  long: '01:00',
}

const MINUTES_ARRAY = new Array(59).fill(0).map((_, i) => i + 1)

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minWidth: 350,
      padding: '0 16px',
    },
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
  const [isChecked, setChecked] = React.useState(activityEdit?.isCustomDuration || false)
  const [radioValue, setRadioValue] = React.useState<DefaultDuration>(activityEdit?.typeDefaultDuration || 'short')
  const [{ hours, minutes }, setDuration] = React.useState({ hours: activityEdit?.hours || 0, minutes: activityEdit?.minutes || 0 })

  const handleChangeSelect = (ev, type: 'hours' | 'minutes') => {
    const value = Number(ev.target.value)

    setDuration(hrsMinValues => ({
      ...hrsMinValues,
      hours: type === 'hours' ? value : hrsMinValues.hours,
      minutes: type === 'hours' ? (value === 2 ? 0 : hrsMinValues.minutes) : value,
    }))
  }

  const handleClick = () => {
    const timeData = {
      time: !isChecked ? TIMES_VALUE[radioValue] : `0${hours}:${minutes.toString().padStart(2, '0')}`,
      typeDefaultDuration: !isChecked ? radioValue : null,
      isCustomDuration: isChecked,
      hours: isChecked ? hours : 0,
      minutes: isChecked ? minutes : 0,
    }

    if (!activityEdit) return onAdd({ id: uniqueId('activity-'), description: inputValue, ...timeData })
    onEdit({ ...activityEdit, description: inputValue, ...timeData })
  }

  const isDisabledButtonAccept = () => {
    return !inputValue || (isChecked && !hours && !minutes)
  }

  const testDuration = (
    <Grid container>
      <Select label="Horas" value={hours} onChange={ev => handleChangeSelect(ev, 'hours')}>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
      </Select>

      <Select label="Minutos" value={minutes} onChange={ev => handleChangeSelect(ev, 'minutes')}>
        <MenuItem value={0}>0</MenuItem>
        {hours < 2 &&
          MINUTES_ARRAY.map(min => (
            <MenuItem key={`numberItem-${min}`} value={min}>
              {min}
            </MenuItem>
          ))}
      </Select>
    </Grid>
  )

  const selectDurationOption = () => {
    if (isChecked) return testDuration

    return (
      <RadioGroup value={radioValue} onChange={ev => setRadioValue(ev.target.value as DefaultDuration)}>
        <FormControlLabel value="short" control={<Radio color="primary" />} label="30 min (corto)" />
        <FormControlLabel value="medium" control={<Radio color="primary" />} label="45 min (mediano)" />
        <FormControlLabel value="long" control={<Radio color="primary" />} label="1 hr (largo)" />
      </RadioGroup>
    )
  }

  return (
    <Dialog open={isOpen} title="Agregar nueva actividad" buttonPropsCancel={{ onClick: onClose }} buttonPropsOk={{ onClick: handleClick, disabled: isDisabledButtonAccept() }}>
      <div className={classes.root}>
        <Input placeholder="Descripción" value={inputValue} onChange={ev => setInputValue(ev.target.value)} className="" />
        <FormControlLabel control={<Checkbox checked={isChecked} onChange={ev => setChecked(ev.target.checked)} color="primary" />} label="Duración personalizada" className="my-2" />

        {selectDurationOption()}
      </div>
    </Dialog>
  )
}
