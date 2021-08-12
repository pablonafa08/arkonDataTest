import { styled } from '@material-ui/core'

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: 8,
  padding: '12px 20px',
  overflow: 'hidden',
  border: '1px solid #E6E5E5',
  borderRadius: 10,
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
