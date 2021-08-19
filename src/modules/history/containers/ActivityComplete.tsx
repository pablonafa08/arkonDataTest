import React from 'react'
import { format } from 'date-fns'
import clsx from 'clsx'
import { makeStyles, Hidden } from '@material-ui/core'
import { ActivityItem } from 'core/context'
import { ContainerActivity, ContentDataActivity, TimeContent, Divider } from 'modules/activities/lib'

const useStyles = makeStyles(theme => ({
  section: {
    color: theme.palette.grey.A400,
    display: 'flex',
    alignItems: 'center',
    '&.sectionWhite': {
      flexDirection: 'column',
      width: '100%',
      '& span': {
        marginBottom: 4,
      },
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      '& span': {
        marginBottom: 4,
      },
      '&.sectionWhite': {
        width: 'auto',
        marginLeft: 12,
      },
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row !important',
      '& span': {
        marginBottom: '0 !important',
      },
    },
  },
}))

interface ActivityCompleteProps {
  item: ActivityItem
}

export const ActivityComplete: React.FC<ActivityCompleteProps> = ({ item }) => {
  const classes = useStyles()

  return (
    <ContainerActivity>
      <ContentDataActivity>
        <div className="flex items-center justify-between w-full">
          <div>{item.description}</div>

          <div className="flex items-center">
            <Divider />

            <div className={clsx(classes.section, 'ml-3')}>
              <span>Duración:</span> <TimeContent className="ml-1">{item.time}</TimeContent>
            </div>
          </div>
        </div>

        <Hidden smUp>
          <Divider orientation="horizontal" />
        </Hidden>

        <div className="flex items-center justify-between flex-shrink-0">
          <div className="flex items-center">
            <Hidden xsDown>
              <Divider />
            </Hidden>

            <div className={clsx(classes.section, 'sectionWhite')}>
              <span>Completada en:</span>
              <TimeContent variant="current" className="ml-1">
                {item.timeElapsed}
              </TimeContent>
            </div>
          </div>

          <div className="flex items-center flex-shrink-0">
            <Divider />

            <div className={clsx(classes.section, 'ml-3')}>
              <span>Fecha:</span> <TimeContent className="ml-1">{format(item.dateFinished, 'dd-MM-yyyy')}</TimeContent>
            </div>
          </div>
        </div>
      </ContentDataActivity>
    </ContainerActivity>
  )
}
