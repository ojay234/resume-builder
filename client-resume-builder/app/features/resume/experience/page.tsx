import Sidebar from "@/components/page-sections/builder/Sidebar";
import React from "react";
import ExperienceSummary from "./ExperienceSummary";

function ExperiencePage() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[20%] w-full">
        <ExperienceSummary />
      </div>
    </div>
  );
}

export default ExperiencePage;
