import React from 'react'
import { makeStyles, Theme, MenuList, ClickAwayListener, Popper, Grow } from '@material-ui/core'
import clsx from 'clsx'
import { FilterIcon } from 'img'

const useStyles = makeStyles((theme: Theme) => ({
  buttonSelect: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    outline: 'none !important',
    fontSize: 14,
    textAlign: 'left',
  },
  selected: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    minWidth: 125,
    maxWidth: 180,
    [theme.breakpoints.up('sm')]: {
      width: 180,
    },
  },
  listItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '3px',
    width: 180,
    background: '#FFF',
    color: theme.palette.primary.main,
    fontWeight: 500,
    boxShadow: '0px 1px 3px 1.5px #00000029',
    '&:focus': {
      outline: 'none',
    },
  },
  displayItemPoper: {
    fontSize: 14,
    padding: '4px 12px',
    cursor: 'pointer',
    outline: 'none',
    '&.selected': {
      opacity: 0.5,
    },
    '&:hover': {
      background: theme.palette.grey.A100,
    },
  },
}))

export type SelectTypeDuration = 'all' | 'short' | 'medium' | 'long'

const ITEMS = {
  all: 'Todos',
  short: 'Corto (30 min o menos)',
  medium: 'Medio (mas 30 min)',
  long: 'Largo (mas de 1 hr)',
}

interface SelectTypeDurationProps {
  onChange: (item: SelectTypeDuration) => void
  filterSelected: SelectTypeDuration
}

export const FilterSelect: React.FC<SelectTypeDurationProps> = ({ onChange, filterSelected }) => {
  const classes = useStyles()
  const [isOpen, setOpen] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => setOpen(open => !open)

  const handleSelect = (value: SelectTypeDuration) => {
    onChange(value)
    setOpen(false)
  }

  return (
    <>
      <button type="button" onClick={handleToggle} className={classes.buttonSelect} ref={buttonRef}>
        <div className={classes.selected}>
          <FilterIcon className="mr-2" /> <span>{ITEMS[filterSelected]}</span>
        </div>
      </button>

      <Popper open={isOpen} anchorEl={buttonRef.current} role={undefined} placement="bottom" style={{ zIndex: 200 }} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Grow {...TransitionProps} timeout={150}>
              <MenuList className={classes.listItems} autoFocusItem={isOpen} id="menu-list-grow">
                {Object.keys(ITEMS).map((item: SelectTypeDuration) => (
                  <div key={item} className={clsx(classes.displayItemPoper, { selected: filterSelected === item })} onClick={() => handleSelect(item)}>
                    {ITEMS[item]}
                  </div>
                ))}
              </MenuList>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  )
}
