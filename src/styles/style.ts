import styled from 'styled-components'
import { IButton, IContainerProps } from '../types/style-type'

export const Container = styled.div<IContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${(props) => props.color};
`

export const Button = styled.button<IButton>`
  background-color: ${({ background }) => background};
  border: none;
  color: white;
`

// When you want to write JS in string (``) location?
// Template literal ${}
