import { styled } from '@material-ui/core'
// import { Skeleton } from '@material-ui/lab'

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

// export const SkeletonCard = styled(Skeleton)(({ theme }) => ({
//   transform: 'none',
//   height: 168,
//   margin: 8,
//   borderRadius: 10,
//   [theme.breakpoints.up('sm')]: {
//     height: 182,
//   },
// }))

// const itemsSkeleton = [0, 1, 2, 3, 4, 5, 6, 7]
// export const SkeletonList = () => (
//   <MainContainer>
//     {itemsSkeleton.map(i => (
//       <SkeletonCard key={`skeletonCard-${i}`} animation="wave" />
//     ))}
//   </MainContainer>
// )

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
