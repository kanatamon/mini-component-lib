/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  large: {
    '--gap': '4px',
    '--height': '24px',
    '--border-radius': '8px',
  },
  medium: {
    '--gap': '0px',
    '--height': '12px',
    '--border-radius': '4px',
  },
  small: {
    '--gap': '0px',
    '--height': '8px',
    '--border-radius': '4px',
  },
}

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size]

  return (
    <ProgressWrapper value={value} max="100" style={style}>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ProgressWrapper>
  )
}

const ProgressWrapper = styled.progress`
  appearance: none;
  height: var(--height);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border: 0;
    border-radius: var(--border-radius);
    padding: var(--gap);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(p) => (p.value > 99 ? '4px' : '4px 0px 0px 4px')};
  }
`

export default ProgressBar
