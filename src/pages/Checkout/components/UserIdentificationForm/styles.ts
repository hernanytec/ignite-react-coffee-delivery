import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  row-gap: 16px;
  column-gap: 12px;

  .col-span-3 {
    grid-column: span 3;
  }

  .col-span-2 {
    grid-column: span 2;
  }
`

export const Input = styled.input`
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background-color: ${(props) => props.theme.colors['base-input']};
  padding: 12px;

  &::before {
    content: 'My content'; /* 11 different input types will render this */
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  &::before {
    content: '123';
    width: 400px;
    height: 300px;
  }
`
