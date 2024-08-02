import Sidebar from "@/components/page-sections/builder/Sidebar";
import React from "react";
import SummaryForm from "../forms/SummaryForm";

function SummaryPage() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[20%] w-full">
        <SummaryForm />
      </div>
    </div>
  );
}

export default SummaryPage;
