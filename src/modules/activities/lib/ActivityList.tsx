import { styled, Theme } from '@material-ui/core'

export const ContainerActivity = styled('div')<Theme, { variant?: 'primary' | 'current' }>(({ theme, variant = 'primary' }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 8,
  padding: '12px 20px',
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

export const TimeContent = styled('div')<Theme, { variant?: 'primary' | 'current' }>(({ variant = 'primary' }) => ({
  color: variant === 'primary' ? '#FFF' : '#293462',
  backgroundColor: variant === 'primary' ? '#293462' : '#FFF',
  padding: '2px 8px',
  borderRadius: 16,
  fontSize: 12,
  fontWeight: 500,
}))

export const Divider = styled('div')<Theme, { variant?: 'primary' | 'current' }>(({ variant = 'primary' }) => ({
  backgroundColor: variant === 'primary' ? '#E6E5E5' : '#FFF',
  width: 1,
  height: 35,
  marginLeft: 12,
}))

// -------------No usadas-------------
export const MainContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: 4,
  maxWidth: 1400,
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 16,
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}))

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
