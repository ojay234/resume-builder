"use client";
import React from "react";
import CustomButton from "@/components/common/custom-button";
import Image from "next/image";

function HeroSection() {
  const navigateToBuilder = () => {
    console.log("clicked");
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between px-16 py-6 my-8">
      <div className="md:w-[50%] relative my-5 md:my-0">
        <div className="ml-5 relative md:w-[85%] w-[100%] h-[390px] border-2 rounded-md">
          <Image
            src="/assets/images/hero.jpg"
            alt=""
            fill
            style={{
              objectFit: "fill",
            }}
            className="rounded-[8px]"
          />
        </div>
        <div className="absolute top-5 md:w-[85%] w-[100%] h-[390px] bg-[#fbe4a8] z-[-1] rounded-md" />
      </div>
      <div className="flex flex-col gap-3 md:w-[47%] text-fontGray">
        <h6>EASY RESUME BUILDER</h6>
        <h1 className="font-bold text-[3.2rem] leading-[4rem] text-[#333]">
          Build your resume in minutes with our resume builder{" "}
        </h1>
        <p className="leading-[1.6rem]">
          Build your resume with resumeBuilder and follow in the footsteps of
          over 14 million job seekers today
        </p>
        <div>
          <CustomButton text="Build My Resume Now" clicked={navigateToBuilder} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
