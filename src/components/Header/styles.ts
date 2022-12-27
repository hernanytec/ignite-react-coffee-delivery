import styled, { css } from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

interface ShoppingCartIconContainerProps {
  counter?: number
}

export const ShoppingCartIconContainer = styled.div<ShoppingCartIconContainerProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  position: relative;

  ${(props) =>
    props.counter &&
    css`
      &::after {
        content: '${props.counter}';
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: ${props.theme.colors['yellow-dark']};
        color: ${props.theme.colors.white};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 12px;
      }
    `}
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: 14px;
  border-radius: 6px;

  .icon {
    color: ${(props) => props.theme.colors.purple};
  }
`
