import { styled, Theme } from '@material-ui/core'

export const ContainerActivity = styled('div')<Theme, { variant?: 'primary' | 'current' }>(({ theme, variant = 'primary' }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '8px 0',
  padding: '4px 8px',
  overflow: 'hidden',
  border: `1px solid ${variant === 'primary' ? '#E6E5E5' : '#293462'}`,
  borderRadius: 10,
  backgroundColor: variant === 'primary' ? '#FFF' : '#293462',
  color: variant === 'primary' ? '#363636' : '#FFF',
  fontSize: 14,
  transition: variant === 'primary' ? 'box-shadow 0.3s ease-in-out' : 'none',
  '&:hover': {
    boxShadow: variant === 'primary' ? '0px 0px 10px #00000033' : 'none',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '8px 20px',
    fontSize: 16,
  },
}))

export const ContentDataActivity = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
}))

export const TimeContent = styled('div')<Theme, { variant?: 'primary' | 'current' }>(({ variant = 'primary' }) => ({
  color: variant === 'primary' ? '#FFF' : '#293462',
  backgroundColor: variant === 'primary' ? '#293462' : '#FFF',
  border: '1px solid #293462',
  padding: '2px 8px',
  borderRadius: 16,
  fontSize: 12,
  fontWeight: 500,
}))

export const Divider = styled('div')<Theme, { variant?: 'primary' | 'current'; orientation?: 'vertical' | 'horizontal' }>(({ variant = 'primary', orientation = 'vertical' }) => ({
  backgroundColor: variant === 'primary' ? '#E6E5E5' : '#FFF',
  width: orientation === 'vertical' ? 1 : '100%',
  height: orientation === 'vertical' ? 35 : 1,
  margin: orientation === 'vertical' ? '0 0 0 12px' : '8px 0',
}))

export const MainContainer = styled('div')({
  width: '100%',
  maxWidth: 1280,
  margin: 'auto',
})

// -------------No usadas-------------

export const ErrorMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: '#F66055',
  border: '1px solid #F21C0D',
  color: '#FFF',
  fontSize: 20,
  fontWeight: 600,
  borderRadius: 10,
  minHeight: 50,
  maxWidth: 1000,
  margin: '40px auto',
  padding: 8,
  [theme.breakpoints.up('sm')]: {
    margin: 'auto',
  },
}))
