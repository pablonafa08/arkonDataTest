import { useSnackbar as useSnackbarNotistack, OptionsObject } from 'notistack'

export const useSnackbar = () => {
  const { enqueueSnackbar } = useSnackbarNotistack()

  const successSnackbar = (message: string, options?: OptionsObject) => {
    return enqueueSnackbar(message, {
      variant: 'success',
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      ...options,
    })
  }

  return {
    successSnackbar,
  }
}
