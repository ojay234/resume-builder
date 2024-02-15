import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  color?: string;
  width?: string;
  clicked: () => void;
}

function CustomButton({ text, color, width, clicked }: ButtonProps) {
  return (
    <StyledButton color={color} onClick={clicked} width={width}>
      {text}
    </StyledButton>
  );
}
const StyledButton = styled.button<{ color?: string; width?: string }>`
  background-color: ${(props) => props.color || "#2b2d2f"};
  color: ${(props) => (props.color !== "transparent" ? "white" : "#404245")};
  border-radius: 6px;
  padding: 2px 15px;
  text-align: center;
  width: ${(props) => props.width};
  border: ${(props) =>
    props.color === "transparent" ? "1px solid #ccc" : "none"};
`;

export default CustomButton;
