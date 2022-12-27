import styled from 'styled-components'
import { iconColor } from '../../../Home/styles'

export const FormHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`
interface IconContainerProps {
  iconColor: iconColor
}

export const IconContainer = styled.div<IconContainerProps>`
  .icon {
    color: ${(props) => props.theme.colors[props.iconColor]};
  }
`

export const FormHeaderText = styled.div`
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  span {
    font-size: 14px;
  }
`
