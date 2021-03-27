import React from 'react'
import styled from 'styled-components'
import VisuallyHidden from '../VisuallyHidden'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /*
    Unopinioned the order of stacking-context, this limit any using
    of z-index in the childs to affect only under <Wrapper/>.
  */
  isolation: isolate;

  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  /*
    Cause we need <NativeSelect/> to be in the most front.
    This let user iteract(focus & hover) with the native select as usual.
    But we intent to transparent the native select.
    So, the users won't visually see it.

    To make the behavior as mentioned, we set this component to be the
    most front using z-index: 2

    Why using z-index instead of swap order of two components?
    We need to use the adjacent sibling combinator, which be like this
    NativeSelect:hover + PresentationalBit.

    With this needed functionality, we need to preserve the order.
    And the z-index help us the manage the order of visual.
  */
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
`

const PresentationalBit = styled.div`
  /*
    Cause we need <NativeSelect/> to be in the most front.
    This let user iteract(focus & hover) with the native select as usual.
    But we intent to transparent the native select.
    So, the users won't visually see it.

    To make the behavior as mentioned, we set this component to be behide
    the <NativeSelect/> using z-index: 1.

    Why using z-index instead of swap order of two components?
    We need to use the adjacent sibling combinator, which be like this
    NativeSelect:hover + PresentationalBit.

    With this needed functionality, we need to preserve the order.
    And the z-index help us the manage the order of visual.
  */
  isolation: isolate;
  z-index: 1;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 2px auto #4374cb;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`

export default Select
