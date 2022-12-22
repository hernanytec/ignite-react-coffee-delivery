import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 40px;
  display: flex;
  gap: 32px;
`

export const SectionTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.fontFamily.Header};
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin-bottom: 15px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
