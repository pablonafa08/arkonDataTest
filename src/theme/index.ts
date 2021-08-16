import { createTheme } from '@material-ui/core/styles'
import { palette } from './palette'

export const AppTheme = createTheme({
  palette: palette,
  zIndex: {
    tooltip: 5000,
  },
})
