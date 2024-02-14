"use client";
import React from "react";
import Sidebar from "@/components/page-sections/builder/Sidebar";
import PersonalDetailsForm from "@/components/page-sections/builder/resume/forms/PersonalDetailsForm";

function PersonalDetails() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <PersonalDetailsForm />
    </div>
  );
}

export default PersonalDetails;
