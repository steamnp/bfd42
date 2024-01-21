import styled from "styled-components";
import { ICard, IButton, IContainerProps } from "../types/style-types";

export const Container = styled.div<IContainerProps>`
  background-color: ${({ bgColor }) => bgColor}; //destructuing
  color: ${({ color }) => color};
`;

export const Button = styled.button<IButton>`
  background-color: ${(props) =>
    props.background}; //using props to call the value of the objects
`;

export const Cardss = styled.div<ICard>`
  background-color: ${({ bgColor }) => bgColor};
`;
