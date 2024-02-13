import React from "react";

function Header() {
  return (
    <div className="sticky top-0 left-0 z-[99] bg-white w-full">
      <div className="flex justify-between items-center relative h-[60px]">
        <h1>
          Resume<span className="font-bold">Builder</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
