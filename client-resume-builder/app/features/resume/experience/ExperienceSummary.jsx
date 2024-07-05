"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import CompanyInfo from "../forms/CompanyInfo";
import { updateExperience, updateExperiences } from "@/app/store/formSlice";
import { experienceProps } from "@/app/types/formTypes";
import ExperienceForm from "../forms/ExperienceForm";
import CustomAddButton from "@/components/common/CustomAddButton";

function ExperienceSummary() {
  const experienceState = useAppSelector((state) => state.experience);
  const experiencesState = useAppSelector((state) => state.experiences);
  const [showExperience, setShowExperience] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const dispatch = useAppDispatch();

  const updateCompanyInfo = (values) => {
    // console.log(values);
    dispatch(updateExperience(values));
    setShowCompanyInfo(false);
    setShowExperience(true);
  };

  const updateExperienceInfo = (values) => {
    console.log(values, "values");
    dispatch(updateExperience(values));
    setShowCompanyInfo(false);
    setShowExperience(false);
    handleUpdateExperiences();
  };

  const updateUI = (ui) => {
    console.log(ui);
    if ((ui = "companyInfo")) {
      setShowCompanyInfo(true);
      setShowExperience(false);
    }
  };

  const handleUpdateExperiences = () => {
    dispatch(updateExperiences(experienceState));
    console.log(experiencesState, "experiences");
  };

  return (
    <div className="w-full bg-[#f6f6f6] pr-10 pl-16 py-6">
      <h1 className="font-bold text-[24px]">Experience</h1>
      <p>Add, edit, or delete your work experience</p>
      {!showCompanyInfo && !showExperience && (
        <div>
          <CustomAddButton
            label="Add work experience"
            onClick={() => updateUI("companyInfo")}
          />
        </div>
      )}
      {!showExperience && showCompanyInfo && (
        <div>
          <CompanyInfo updateCompanyInfo={updateCompanyInfo} />
        </div>
      )}
      {showExperience && !showCompanyInfo && (
        <div>
          <ExperienceForm updateExperienceInfo={updateExperienceInfo} />
        </div>
      )}
    </div>
  );
}

export default ExperienceSummary;
