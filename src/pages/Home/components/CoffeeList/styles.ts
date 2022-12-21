import styled from 'styled-components'

export const CoffeeListContainer = styled.section``

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
`
export const CoffeeListTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.fontFamily.Header};
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin-bottom: 54px;
`
