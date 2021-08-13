import React from 'react'

import { ReactComponent as TwoLinesSvg } from 'img/icons/Icon_two_lines.svg'

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
