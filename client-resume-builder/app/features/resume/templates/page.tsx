"use client";
import React from "react";
import { useRouter } from "next/navigation";
import templates from "@/data/templates";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import { setTemplateId } from "@/app/store/formSlice";
import styled from "styled-components";
import ColorSelector from "@/components/page-sections/builder/ColorSelector";
import dummyTemplateData from "@/data/dummyTemplateData";

function Templates() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const selectedColor = useAppSelector((state) => state.color);


  const formattedFormData = {
    ...dummyTemplateData,
    selectedColor,
  };

  const handleSelectedTemplate = (id: number) => {
    dispatch(setTemplateId(id));
    router.push("/features/resume/builder/personal-details");
  };

  return (
    <StyledContainer className="flex flex-col gap-3 bg-[#f0f0f0]">
      <h1 className="text-center font-bold text-3xl mt-4">
        choose your template
      </h1>
      <div className="relative my-2 flex justify-center">
        <ColorSelector />
      </div>
      <div className="flex gap-8 flex-wrap  w-[95%] mx-auto mt-16">
        {templates.map((temp, index) => (
          <div
            key={index}
            onClick={() => handleSelectedTemplate(temp.id)}
            className="w-[31%] cursor-pointer template-wrapper relative hover:border-2 border-gray-500 bg-white "
          >
            <div className="template">
              <temp.component formData={formattedFormData} />
            </div>
          </div>
        ))}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  .template-wrapper {
    overflow: hidden;
    border-radius: 12px;
    height: 450px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06),
      0 12px 28px -2px rgba(0, 0, 0, 0.1);
    position: relative;

    .template {
      position: absolute;
      width: 900px;
      transform: scale(0.45);
      transform-origin: top left;
    }
  }
`;

export default Templates;
