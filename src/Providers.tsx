import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { AppTheme } from 'theme'
import { ActivitiesProvider } from 'core/context'

export const AppProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <SnackbarProvider>
        {/* Context of activities */}
        <ActivitiesProvider>{children}</ActivitiesProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
