import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  color?: string;
  clicked: () => void;
}

function CustomButton({ text, color, clicked }: ButtonProps) {
  return (
    <StyledButton color={color} onClick={clicked}>
      {text}
    </StyledButton>
  );
}
const StyledButton = styled.button<{ color?: string }>`
  background-color: ${(props) => props.color || "#2b2d2f"};
  color: white;
  border-radius: 6px;
  padding: 2px 15px;
  text-align: center;
`;

export default CustomButton;
