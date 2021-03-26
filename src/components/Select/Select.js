import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper id="chevron-down" size="24" strokeWidth="2" />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  --text-color: ${COLORS.gray700};

  position: relative;
  width: fit-content;

  &:hover {
    --text-color: ${COLORS.black};
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  right: 10px;
  color: var(--text-color);
`

const SelectWrapper = styled.select`
  /* CSS Reset */
  appearance: none;
  line-height: normal;

  color: var(--text-color);
  font-size: 16px;
  padding: 12px 52px 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
`

export default Select
