import React from 'react'
import { Dialog } from '../lib'

interface ConfirmStartNewActivityProps {
  isOpen: boolean
  onAccept: () => void
  onCancel: () => void
}

export const ConfirmStartNewActivity: React.FC<ConfirmStartNewActivityProps> = ({ isOpen, onAccept, onCancel }) => {
  if (!isOpen) return null

  return (
    <Dialog open={isOpen} title="Iniciar nueva tarea" buttonPropsCancel={{ onClick: onCancel }} buttonPropsOk={{ onClick: onAccept }}>
      <div className="text-center">Actualmente está en curso otra tarea</div>
      <div className="text-center font-bold">¿Quieres detenerla e iniciar la nueva?</div>
    </Dialog>
  )
}
