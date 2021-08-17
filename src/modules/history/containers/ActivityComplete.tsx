import React from 'react'
import { format } from 'date-fns'
import { ActivityItem } from 'core/context'
import { ContainerActivity, TimeContent, Divider } from 'modules/activities/lib'

interface ActivityCompleteProps {
  item: ActivityItem
}

export const ActivityComplete: React.FC<ActivityCompleteProps> = ({ item }) => {
  return (
    <ContainerActivity>
      <div className="w-full flex items-center justify-between">
        <div>{item.description}</div>
        <div className="flex items-center">
          <Divider />
          <div className="flex ml-3">
            Duración: <TimeContent className="ml-1">{item.time}</TimeContent>
          </div>
          <Divider />
          <div className="flex ml-3">
            Completada en:
            <TimeContent variant="current" className="ml-1">
              {item.timeElapsed}
            </TimeContent>
          </div>
          <Divider />
          <div className="flex ml-3">
            Fecha: <TimeContent className="ml-1">{format(item.dateFinished, 'dd-MM-yyyy')}</TimeContent>
          </div>
        </div>
      </div>
    </ContainerActivity>
  )
}
