import { Field } from "formik";
import React from "react";
import styled from "styled-components";

interface CustomSelectProps {
  inputName: string;
  inputType: string;
  selectName: string;
  label: string;
  options: React.ReactNode;
}

function CustomInputWithAddons({
  inputName,
  inputType,
  selectName,
  label,
  options,
}: CustomSelectProps) {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <div className="input-content">
        <Field name={selectName} as="select">
          {options}
        </Field>

        <Field name={inputName} type={inputType} />
      </div>
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  label {
    font-size: 12px;
  }

  .input-content {
    border-radius: 5px;
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ccc;
    display: flex;
    gap: 10px;
    background-color: white;

    select {
      width: 30%;
      background-color: transparent;
      outline: none;
    }
    input {
      width: 70%;
      background-color: transparent;
      outline: none;
    }
  }
`;

export default CustomInputWithAddons;
