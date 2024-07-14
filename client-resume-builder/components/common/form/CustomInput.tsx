import { Field } from "formik";
import styled from "styled-components";

interface CustomInputProps {
  name: string;
  type: string;
  label: string;
  pattern?: string;
}

function CustomInput({ name, type, label, pattern }: CustomInputProps) {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <Field name={name} type={type} pattern={pattern} />
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
    padding: 2px 20px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

export default CustomInput;
