import { Field } from "formik";
import styled from "styled-components";

interface CustomInputProps {
  name: string;
  type: string;
  label: string;
  className?: string;
}

function CustomInput({ name, type, label, className }: CustomInputProps) {
  return (
    <StyledInputContainer className={className}>
      <label>{label}</label>
      <Field name={name} type={type} />
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  label {
    font-size: 12px;
  }

  input {
    border-radius: 5px;
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

export default CustomInput;
