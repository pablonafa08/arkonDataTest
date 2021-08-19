import React from 'react'

import { ReactComponent as TwoLinesSvg } from 'img/icons/Icon_two_lines.svg'
import { ReactComponent as CheckSvg } from 'img/icons/Icon_check.svg'
import { ReactComponent as PencilSvg } from 'img/icons/Icon_pencil.svg'
import { ReactComponent as TrashSvg } from 'img/icons/Icon_trash.svg'
import { ReactComponent as PlaySvg } from 'img/icons/Icon_play.svg'
import { ReactComponent as PauseSvg } from 'img/icons/Icon_pause.svg'
import { ReactComponent as StopSvg } from 'img/icons/Icon_stop.svg'
import { ReactComponent as ReloadSvg } from 'img/icons/Icon_reload.svg'
import { ReactComponent as MenuSvg } from 'img/icons/Icon_menu.svg'

export type IconSvg = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string
  }
>

const defaultProps = {
  width: 20,
  height: 20,
}

export const TwoLinesIcon: IconSvg = props => <TwoLinesSvg {...defaultProps} {...props} />
export const CheckIcon: IconSvg = props => <CheckSvg {...defaultProps} {...props} />
export const PencilIcon: IconSvg = props => <PencilSvg {...defaultProps} {...props} />
export const TrashIcon: IconSvg = props => <TrashSvg {...defaultProps} {...props} />
export const PlayIcon: IconSvg = props => <PlaySvg {...defaultProps} {...props} />
export const PauseIcon: IconSvg = props => <PauseSvg {...defaultProps} {...props} />
export const StopIcon: IconSvg = props => <StopSvg {...defaultProps} {...props} />
export const ReloadIcon: IconSvg = props => <ReloadSvg {...defaultProps} {...props} />
export const MenuIcon: IconSvg = props => <MenuSvg {...defaultProps} {...props} />
