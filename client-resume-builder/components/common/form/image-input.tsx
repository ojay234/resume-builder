import { Field } from "formik";
import React, { useRef } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import styled from "styled-components";
import CustomButton from "../custom-button";

function ImageInput() {
  const attachmentUploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    attachmentUploadRef?.current?.click();
    console.log("clicked");
  };

  return (
    <div className="flex gap-7 items-center mt-8 ">
      <div className="border-2 border-[#ccc] rounded-md p-7 bg-white border-dashed">
        <FaRegUserCircle size="2.5rem" />
      </div>
      <StyledInputContainer>
        <p className="text-sm mb-2">Add a photo to Your Resume (optional)</p>
        <input
          name="photo"
          type="file"
          ref={attachmentUploadRef}
          accept=".png, .jpg, .jpeg, .pdf, .doc, .docx"
        />
        <CustomButton
          text="Add Photo"
          clicked={handleUpload}
          color="transparent"
          width="60%"
        />
      </StyledInputContainer>
    </div>
  );
}

const StyledInputContainer = styled.div`
  input {
    display: none;
  }
  button {
    font-size: 14px;
    padding: 0 5px !important;
  }
`;

export default ImageInput;
