import Sidebar from "@/components/page-sections/builder/Sidebar";
import React from "react";
import EducationSummary from "./EducationSummary";

function EducationPage() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[20%] w-full">
        <EducationSummary />
      </div>
    </div>
  );
}

export default EducationPage;
