import styled from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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

export const Cart = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
`
