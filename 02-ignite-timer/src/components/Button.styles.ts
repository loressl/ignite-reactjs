import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`
