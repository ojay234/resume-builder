"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import CompanyInfo from "../../forms/CompanyInfo";
import {
  setExperiencesState,
  setExperienceState,
  updateExperience,
  updateExperiences,
} from "@/app/store/formSlice";
import { experienceProps } from "@/app/types/formTypes";
import ExperienceForm from "../../forms/ExperienceForm";
import CustomAddButton from "@/components/common/CustomAddButton";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import initialResumeFormValues from "../../forms/models/initialResumeFormValues";
import CustomButton from "@/components/common/CustomButton";

// Utility function to convert <ul> to array of <li> inner HTML
const ulToArray = (htmlContent: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const ulElement = doc.querySelector("ul");
  if (!ulElement) {
    return [];
  }

  const liElements = ulElement.querySelectorAll("li");
  const liArray = Array.from(liElements).map((li) => li.innerHTML);
  console.log("List Items Array: ", liArray); // Debugging log

  return liArray;
};

function ExperienceSummary() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const experience = useAppSelector((state) => state.experience);
  const experiences = useAppSelector((state) => state.experiences);
  const [showExperience, setShowExperience] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  const [visibleTextsId, setVisibleTextsId] = useState<(number | null)[]>([]);

  const getId = useCallback(() => {
    return experiences.length + 1;
  }, [experiences]);

  const updateCompanyInfo = (values: experienceProps) => {
    console.log(experience.id);
    const formattedExperience = { ...values, id: experience.id || getId() };
    dispatch(updateExperience(formattedExperience));

    setShowCompanyInfo(false);
    setShowExperience(true);
  };

  const updateExperienceInfo = (values: experienceProps) => {
    console.log(values, "this is typed values");
    dispatch(updateExperience(values));
    handleUpdateExperiences(values);
  };

  const updateUI = (ui: string) => {
    if (ui === "companyInfo") {
      setShowCompanyInfo(true);
      setShowExperience(false);
    }
  };

  const handleUpdateExperiences = (values: experienceProps) => {
    const checkIfExperienceExist = experiences.find(
      (item) => item.id === values.id
    );

    if (checkIfExperienceExist) {
      const newExperiences = experiences.map((exp) =>
        exp.id === values.id ? values : exp
      );
      dispatch(setExperiencesState(newExperiences));
    } else {
      dispatch(updateExperiences(values));
    }
    setShowCompanyInfo(false);
    setShowExperience(false);
    dispatch(setExperienceState(initialResumeFormValues.experience));
  };

  const handleEditExperience = (id: number | null) => {
    const experienceToEdit = experiences.find((exp) => exp.id === id);
    dispatch(setExperienceState(experienceToEdit));
    setShowCompanyInfo(true);
    setShowExperience(false);
  };

  const handleDeleteExperience = (id: number | null) => {
    const newExperiences = experiences.filter((exp) => exp.id !== id);
    dispatch(setExperiencesState(newExperiences));
  };

  const findVisibleTextsId = (id: number | null) =>
    visibleTextsId.find((textId) => textId === id);

  const showMoreText = (id: number | null) => {
    if (findVisibleTextsId(id)) {
      const newTextIds = visibleTextsId.filter((textId) => textId !== id);
      setVisibleTextsId(newTextIds);
    } else {
      setVisibleTextsId([...visibleTextsId, id]);
    }
  };

  const formatDate = (date: Date | string): string => {
    if (!date) return "";
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${month}-${year}`;
  };

  const previousForm = () => {
    router.push("/features/resume/builder/personal-details");
  };

  const nextForm = () => {
    router.push("/features/resume/builder/education");
  };

  const exitCompanyForm = () => {
    setShowCompanyInfo(false);
  };

  const exitExperienceForm = () => {
    setShowExperience(false);
    setShowCompanyInfo(true);
  };

  return (
    <div className="md:w-[60%] ">
      <h1 className="font-bold text-[24px]">Experience</h1>
      <p>Add, edit, or delete your work experience</p>
      {!showCompanyInfo && !showExperience && (
        <div>
          {experiences.length !== 0 ? (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end">
                <button
                  className="flex gap-2 items-center"
                  onClick={() => updateUI("companyInfo")}
                >
                  <FiPlusCircle />
                  Add more experience
                </button>
              </div>
              {experiences.map((exp, index) => (
                <div
                  className="border-2 border-gray-400 rounded-lg p-4 bg-white"
                  key={index}
                >
                  <div className="flex justify-between ">
                    <div className="flex flex-col">
                      <h1>{exp.jobTitle}</h1>
                      <p>
                        <span>{exp.company}</span> <span>{exp.country}</span>{" "}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleEditExperience(exp.id)}
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleDeleteExperience(exp.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <p>
                    <span>{formatDate(exp.startDate)}</span>{" "}
                    <span>{formatDate(exp.endDate)}</span>
                  </p>
                  <div
                    className={
                      findVisibleTextsId(exp.id)
                        ? ""
                        : "h-[30px] overflow-hidden"
                    }
                  >
                    {ulToArray(exp.experience).map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                  <button
                    className="flex gap-2 text-gray-500 font-bold text-xl"
                    onClick={() => showMoreText(exp.id)}
                  >
                    show More
                  </button>
                </div>
              ))}
              <div className="flex gap-5 my-5">
                <CustomButton
                  text="Back"
                  clicked={previousForm}
                  color="transparent"
                  width="100%"
                />
                <CustomButton text="Continue" width="100%" clicked={nextForm} />
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <CustomAddButton
                label="Add work experience"
                onClick={() => updateUI("companyInfo")}
              />
            </div>
          )}
        </div>
      )}
      {!showExperience && showCompanyInfo && (
        <div>
          <CompanyInfo
            updateCompanyInfo={updateCompanyInfo}
            exitCompanyForm={exitCompanyForm}
          />
        </div>
      )}
      {showExperience && !showCompanyInfo && (
        <div>
          <ExperienceForm
            updateExperienceInfo={updateExperienceInfo}
            exitExperienceForm={exitExperienceForm}
          />
        </div>
      )}
    </div>
  );
}

export default ExperienceSummary;
