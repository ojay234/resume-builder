import { Field } from "formik";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

interface CustomInputProps {
  name: string;
  type: string;
  label: string;
  onDeleteBtnClick: () => void;
}

function CustomDeletableInput({
  name,
  type,
  label,
  onDeleteBtnClick,
}: CustomInputProps) {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <div className="flex w-full items-center">
        <Field name={name} type={type} />
        <button
          onClick={onDeleteBtnClick}
          className="absolute right-2"
          type="button"
        >
          <RiDeleteBin6Line size="1.2rem" />
        </button>
      </div>
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  position: relative;
  label {
    font-size: 12px;
  }

  input {
    border-radius: 5px;
    width: 100%;
    padding: 6px 30px 6px 10px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

export default CustomDeletableInput;
