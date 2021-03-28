import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const [iconSize, iconThickness] = size === 'small' ? [16, 1] : [24, 2]
  const InputComponent = size === 'small' ? SmallInput : LargeInput

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} strokeWidth={iconThickness} />
      </IconWrapper>
      <InputComponent style={{ '--width': width + 'px' }} {...delegated} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`

const InputText = styled.input`
  width: var(--width);
  color: inherit;
  font-weight: 700;
  border: none;
  border-bottom-style: solid;
  border-bottom-color: ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const SmallInput = styled(InputText)`
  height: 24px;
  padding-left: 24px;
  font-size: ${14 / 16}rem;
  border-bottom-width: 1px;
`

const LargeInput = styled(InputText)`
  height: 36px;
  padding-left: 36px;
  font-size: ${18 / 16}rem;
  border-bottom-width: 2px;
`

export default IconInput
