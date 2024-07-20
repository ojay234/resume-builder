import Sidebar from "@/components/page-sections/builder/Sidebar";
import React from "react";
import SkillsForm from "../forms/SkillsForm";

function SkillsPage() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[20%] w-full">
        <SkillsForm />
      </div>
    </div>
  );
}

export default SkillsPage;
