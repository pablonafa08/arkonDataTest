import { useSnackbar as useSnackbarNotistack, OptionsObject } from 'notistack'

// hook that returns notistack's snackbar
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
