import styled from 'styled-components'
import { iconColor } from '../Home/styles'

export const SuccessContainer = styled.main`
  margin-top: 80px;
`

export const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: ${(props) => props.theme.fonts.fontFamily.Header};
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  gap: 102px;
`

export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  margin-top: 40px;
  width: 526px;

  border: 1px solid transparent;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.colors.yellow},
        ${(props) => props.theme.colors.purple}
      )
      border-box;
`

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .bold {
    font-weight: bold;
  }
`

interface IconWrapperProps {
  background: iconColor
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  border-radius: 50%;
  padding: 8px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.background]};
`

export const OrderInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
