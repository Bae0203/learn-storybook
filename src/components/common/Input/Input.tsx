import React, { type ChangeEventHandler } from "react";
import * as S from "./Input.style";

interface IInputProps {
  primary?: boolean;
  color?: string;
  width?: number;
  height?: number;
  border?: number;
  label?: string;
  placeholder?: string;
  placeholderColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  primary,
  color,
  width,
  height,
  border,
  label,
  placeholder,
  placeholderColor,
  onChange,
  ...props
}: IInputProps) => {
  return (
    <div>
      <S.Label color={color}>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        width={width}
        height={height}
        color={color}
        border={border}
        primary={primary}
        placeholderColor={placeholderColor}
        {...props}
      />
    </div>
  );
};

export default Input;
