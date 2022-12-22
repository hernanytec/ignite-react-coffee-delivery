import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 256px;
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0 24px 20px 24px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  .cup-coffee {
    margin-top: -20px;
    margin-bottom: 16px;
    width: 120px;
    height: 120px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
`

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  text-transform: uppercase;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 33px;

  strong {
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.fontFamily.Header};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CoffeePrice = styled.span`
  &::before {
    content: 'R$ ';
    font-size: 12px;
    font-family: ${(props) => props.theme.fonts.fontFamily.Text};
  }
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.fontFamily.Header};
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const CartButton = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors['purple-dark']};
  transition: background-color 0.2s;

  .icon {
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
