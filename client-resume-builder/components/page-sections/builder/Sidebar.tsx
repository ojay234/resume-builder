"use client";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { PiMagicWand } from "react-icons/pi";
import { MdOutlineSummarize } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { BsBookmarkCheck } from "react-icons/bs";
import { Progress } from "antd";
import styled from "styled-components";

function Sidebar() {
  const buttons = [
    {
      icon: <FaRegUser size="1.2rem" />,
      text: "Contact",
      onClick: () => handleButtonClick("contact"),
    },
    {
      icon: <CgWorkAlt size="1.2rem" />,
      text: "Experience",
      onClick: () => handleButtonClick("experience"),
    },
    {
      icon: <LuGraduationCap size="1.2rem" />,
      text: "Education",
      onClick: () => handleButtonClick("education"),
    },
    {
      icon: <PiCertificate size="1.2rem" />,
      text: "Certifications",
      onClick: () => handleButtonClick("certification"),
    },
    {
      icon: <PiMagicWand size="1.2rem" />,
      text: "Skills",
      onClick: () => handleButtonClick("skills"),
    },
    {
      icon: <MdOutlineSummarize size="1.2rem" />,
      text: "Summary",
      onClick: () => handleButtonClick("summary"),
    },
    {
      icon: <IoIosLink size="1.2rem" />,
      text: "References",
      onClick: () => handleButtonClick("references"),
    },
    {
      icon: <BsBookmarkCheck size="1.2rem" />,
      text: "Finalize",
      onClick: () => handleButtonClick("finalize"),
    },
  ];

  // Function to handle button click
  const handleButtonClick = (text: string) => {
    console.log(`Button clicked: ${text}`);
  };

  const completedSteps = 3;
  const totalSteps = buttons.length;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <SidebarContainer className="hidden md:flex flex-col justify-between gap-3 w-[30%] max-w-[300px]  bg-white  overflow-hidden py-3 text-lg px-2">
      <div className="flex flex-col gap-3">
        {buttons.map((button, index) => (
          <StyledButton key={index} onClick={button.onClick}>
            <p>{button.icon}</p>
            <p>{button.text}</p>
          </StyledButton>
        ))}
      </div>

      <Progress percent={progress} status="active" />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  height: calc(100vh - 55px);
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 15px;
  border-radius: 8px;
  &:hover {
    background-color: #96b5f9;
    color: white;
  }
`;

export default Sidebar;
