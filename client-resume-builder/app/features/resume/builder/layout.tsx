import Header from "@/components/page-sections/builder/Header";
import Sidebar from "@/components/page-sections/builder/Sidebar";
import React from "react";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[25%] bg-[#f6f6f6] w-[75%] px-5 py-6 min-h-[90vh] rounded-lg ">
        {children}
      </div>
    </div>
  );
}

export default layout;
