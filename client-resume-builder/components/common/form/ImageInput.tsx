import { useField } from "formik";
import React, { useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import styled from "styled-components";
import CustomButton from "../CustomButton";
import Image from "next/image";

interface ImageInputProps {
  image: string;
  imageChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImageInput({ image, imageChangeHandler }: ImageInputProps) {
  const attachmentUploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    attachmentUploadRef?.current?.click();
  };

  return (
    <div className="flex gap-7 items-center mt-8 ">
      <div>
        {image ? (
          <Image src={image} alt="photo" width={120} height={80} />
        ) : (
          <div className="border-2 border-[#ccc] rounded-md p-7 bg-white border-dashed">
            <FaRegUserCircle size="2.5rem" />
          </div>
        )}
      </div>

      <StyledInputContainer>
        <p className="text-sm mb-2">Add a photo to Your Resume (optional)</p>
        <input
          name="photo"
          type="file"
          ref={attachmentUploadRef}
          accept=".png, .jpg, .jpeg,"
          onChange={(event) => imageChangeHandler(event)}
        />
        <CustomButton
          text="Add Photo"
          clicked={handleUpload}
          color="transparent"
          width="60%"
          type="button"
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
