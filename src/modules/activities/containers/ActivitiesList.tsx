import React from 'react'
import { Activity } from '../lib'
const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export const ActivitiesList = () => {
  return (
    <div>
      {ITEMS.map(item => (
        <Activity key={item} activity={`Activity item ${item}`} />
      ))}
    </div>
  )
}
