import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  color?: string;
  width?: string;
  clicked?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

function CustomButton({
  text,
  color,
  width,
  clicked,
  type = "button",
}: ButtonProps) {
  return (
    <StyledButton color={color} onClick={clicked} width={width} type={type}>
      {text}
    </StyledButton>
  );
}
const StyledButton = styled.button<{ color?: string; width?: string }>`
  background-color: ${(props) => props.color || "#2b2d2f"};
  color: ${(props) => (props.color !== "transparent" ? "white" : "#404245")};
  border-radius: 6px;
  padding: 6px 15px;
  text-align: center;
  width: ${(props) => props.width};
  border: ${(props) =>
    props.color === "transparent" ? "1px solid #ccc" : "none"};
`;

export default CustomButton;
