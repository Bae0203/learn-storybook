import styled from "styled-components";

interface IInputStyleProps {
  color?: string;
  width?: number;
  height?: number;
  border?: number;
  primary?: boolean;
  placeholderColor?: string;
}

export const Label = styled.p<IInputStyleProps>`
  margin-bottom: 4px;
  font-size: 12px;
  color: ${({ color }) => color};
`;

export const Input = styled.input<IInputStyleProps>`
  padding: 4px 8px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ border }) => border}px;
  border: ${({ color }) => `1px solid ${color}`};
  ${({ primary, color }) =>
    primary
      ? `background-color: ${color}; color: white;`
      : `color : ${color};`};
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;
