import { Field } from "formik";
import React from "react";
import styled from "styled-components";

interface CustomSelectProps {
  name: string;
  type: string;
  label?: string;
  options: React.ReactNode;
}

function CustomSelect({ name, type, label, options }: CustomSelectProps) {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <Field name={name} as={type}>
        {options}
      </Field>
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  label {
    font-size: 12px;
  }

  select {
    border-radius: 5px;
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

export default CustomSelect;
