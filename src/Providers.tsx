import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { AppTheme } from 'theme'
import { ActivitiesProvider } from 'core/context'

export const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <ActivitiesProvider>{children}</ActivitiesProvider>
    </ThemeProvider>
  )
}
