import { styled } from '@material-ui/core'

export const ContainerActivity = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: 8,
  padding: '12px 20px',
  overflow: 'hidden',
  border: '1px solid #E6E5E5',
  borderRadius: 10,
  backgroundColor: '#FFF',
  color: '#363636',
  fontSize: 14,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 10px #00000033',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '16px 28px',
    fontSize: 16,
  },
}))

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
