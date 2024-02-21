"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const path = usePathname();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const pathArray = path.split("/");
    const requiredPathname = pathArray[pathArray.length - 1];
    console.log(pathArray, requiredPathname);
    setActiveButton(requiredPathname);
  }, []);

  const buttons = [
    {
      id: "personal-details",
      icon: <FaRegUser size="1.2rem" />,
      text: "Contact",
      onClick: () => handleButtonClick("contact"),
    },
    {
      id: "experience",
      icon: <CgWorkAlt size="1.2rem" />,
      text: "Experience",
      onClick: () => handleButtonClick("experience"),
    },
    {
      id: "education",
      icon: <LuGraduationCap size="1.2rem" />,
      text: "Education",
      onClick: () => handleButtonClick("education"),
    },
    {
      id: "certifications",
      icon: <PiCertificate size="1.2rem" />,
      text: "Certifications",
      onClick: () => handleButtonClick("certification"),
    },
    {
      id: "skills",
      icon: <PiMagicWand size="1.2rem" />,
      text: "Skills",
      onClick: () => handleButtonClick("skills"),
    },
    {
      id: "summary",
      icon: <MdOutlineSummarize size="1.2rem" />,
      text: "Summary",
      onClick: () => handleButtonClick("summary"),
    },
    {
      id: "references",
      icon: <IoIosLink size="1.2rem" />,
      text: "References",
      onClick: () => handleButtonClick("references"),
    },
    {
      id: "finalize",
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
    <SidebarContainer className="hidden md:flex flex-col justify-between gap-3 w-[25%] max-w-[300px]  bg-white  py-3 text-lg px-2">
      <div className="flex flex-col gap-3">
        {buttons.map((button, index) => (
          <StyledButton
            key={index}
            onClick={button.onClick}
            activated={activeButton === button.id}
          >
            <p>{button.icon}</p>
            <p>{button.text}</p>
          </StyledButton>
        ))}
      </div>

      <Progress percent={progress} />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  height: calc(100vh - 60px);
  position: fixed;
  overflow: hidden !important;
`;

const StyledButton = styled.button<{ activated: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 15px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.activated ? "#181717cc" : "transparent"};
  color: ${(props) => (props.activated ? "white" : "#404245")};
  &:hover {
    background-color: #96b5f9;
    color: white;
  }
`;

export default Sidebar;
