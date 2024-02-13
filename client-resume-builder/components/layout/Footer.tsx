import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
function Footer() {
  return (
    <div className="bottom-0 px-16 bg-bgGray py-8">
      <div className="flex justify-between items-center">
        <h1>
          resume<span className="font-bold">Builder</span>
        </h1>
        <div className="flex gap-4 items-center">
          <a href="/">
            <RiTwitterXLine size="1.2rem" />
          </a>
          <a href="/">
            <SlSocialLinkedin size="1.2rem" />
          </a>
          <a href="/">
            <VscGithubAlt size="1.2rem" />
          </a>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-fontGray" />
      <div className="flex justify-between flex-wrap items-center my-4 text-sm">
        <p className="">© 2024, David. All rights reserved</p>
        <p>Resume builder developed by David </p>
      </div>
    </div>
  );
}

export default Footer;
