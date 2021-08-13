import React from 'react'
import { AddIcon } from 'img'
import { Input, Button } from '../lib'

export const NewActivity = ({ onAdd }) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleClick = () => {
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <Input placeholder="Nueva actividad" value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      <Button onClick={handleClick} disabled={!inputValue}>
        Agregar
      </Button>
      <AddIcon fill="#293462" />
    </div>
  )
}
