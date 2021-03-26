import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--font-size': 14 / 16 + 'rem',
    '--border-line': `1px solid ${COLORS.black}`,
    '--padding': '4px 4px 4px 24px',
  },
  large: {
    '--font-size': 18 / 16 + 'rem',
    '--border-line': `2px solid ${COLORS.black}`,
    '--padding': '8px 8px 8px 36px',
  },
}

const ICON_SIZES = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = {
    '--width': width + 'px',
    ...SIZES[size],
  }
  const iconSize = ICON_SIZES[size]

  return (
    <Wrapper style={style}>
      <IconWrapper
        id={icon}
        size={iconSize.size}
        strokeWidth={iconSize.strokeWidth}
      />
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <InputText type="text" placeholder={placeholder} />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  width: var(--width);
  position: relative;
  border-radius: 2px;

  --input-text-color: ${COLORS.gray700};

  &:hover {
    --input-text-color: ${COLORS.black};
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  left: 0;
  color: var(--input-text-color);
`

const InputText = styled.input`
  width: 100%;
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-line);
  padding: var(--padding);
  font-weight: 700;
  color: var(--input-text-color);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
    outline-width: 2px;
  }
`

export default IconInput
