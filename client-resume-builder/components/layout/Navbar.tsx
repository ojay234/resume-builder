"use client";
import React, { useState } from "react";
import CustomButton from "../common/custom-button";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navigateToBuilder = () => {
    console.log("clicked");
  };

  return (
    <nav className="sticky top-0 left-0 z-[99] bg-white w-full">
      <div className="flex justify-between items-center px-16 py-3 relative">
        <h1>
          Resume<span className="font-bold">Builder</span>
        </h1>
        <StyledRow
          className="flex flex-col absolute md:relative top-[50px] md:top-0 md:flex-row gap-4 md:justify-between md:w-[70%] bg-white md:bg-transparent"
          show={showMenu}
        >
          <div className="flex md:flex-row flex-col md:gap-8 text-fontGray">
            <a href="/listBuilder">Cover Letters</a>
            <a href="/resumebuilder">Resumes</a>
          </div>
          <CustomButton text="Build My Resume" clicked={navigateToBuilder} />
        </StyledRow>
        <div className="text-fontGray md:hidden">
          <MenuToggleBtn onClick={() => setShowMenu(true)} show={!showMenu}>
            <CgMenuRightAlt size="1.2rem" />
          </MenuToggleBtn>
          <MenuToggleBtn onClick={() => setShowMenu(false)} show={showMenu}>
            <IoCloseOutline size="1.2rem" />
          </MenuToggleBtn>
        </div>
      </div>
    </nav>
  );
}

const StyledRow = styled.div<{ show?: boolean }>`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
  }
`;

const MenuToggleBtn = styled.button<{ show?: boolean }>`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;

export default Navbar;
