import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
`

export const SelectedProductsListFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
`

export const PriceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-size: 14px;
  }
`

export const PriceTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
    font-weight: 700;
  }
`

export const ConfirmOrderButton = styled.button`
  cursor: pointer;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 12px;
  width: 100%;
  border: none;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};
`
