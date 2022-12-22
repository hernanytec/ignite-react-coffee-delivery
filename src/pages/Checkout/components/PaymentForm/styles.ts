import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 40px;
`

export const PaymentOptionsList = styled.div`
  display: flex;
  gap: 12px;
`

interface PaymentOptionProps {
  selected?: boolean
}

export const PaymentOption = styled.div<PaymentOptionProps>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};

  .icon {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    font-size: 12px;
    text-transform: uppercase;
  }

  background-color: ${(props) =>
    props.selected ? props.theme.colors['purple-light'] : ''};
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.colors.purple}`
      : '1px solid transparent'};
`
