"use client";
import React from "react";
import { useRouter } from "next/navigation";
import templates from "@/data/templates";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/app/hooks/redux-hooks";
import { setTemplateId } from "@/app/store/formSlice";
import styled from "styled-components";
import ColorSelector from "@/components/page-sections/builder/ColorSelector";

function Templates() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSelectedTemplate = (id: number) => {
    dispatch(setTemplateId(id));
    router.push("/features/resume/builder/personal-details");
  };

  return (
    <TemplateWrapper className="flex flex-col gap-3 bg-[#f0f0f0]">
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
            className="w-[31%] cursor-pointer template relative hover:border-2 border-gray-500"
          >
            <Image
              src={temp.imgSrc}
              fill
              style={{
                objectFit: "cover",
              }}
              alt={temp.name}
            />
          </div>
        ))}
      </div>
    </TemplateWrapper>
  );
}

const TemplateWrapper = styled.div`
  .template {
    overflow: hidden;
    border-radius: 12px;
    height: 450px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06),
      0 12px 28px -2px rgba(0, 0, 0, 0.1);
  }
`;

export default Templates;
