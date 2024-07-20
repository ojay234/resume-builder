"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";

import {
  setEducationListState,
  setEducationState,
  updateEducationList,
} from "@/app/store/formSlice";
import { educationProps } from "@/app/types/formTypes";

import CustomAddButton from "@/components/common/CustomAddButton";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import initialResumeFormValues from "../forms/models/initialResumeFormValues";
import EducationForm from "../forms/EducationForm";
import CustomButton from "@/components/common/CustomButton";

function EducationSummary() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const education = useAppSelector((state) => state.education);
  const educationList = useAppSelector((state) => state.educationList);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const getId = useCallback(() => {
    return educationList.length + 1;
  }, [educationList]);

  const updateEducationInfo = (values: educationProps) => {
    const formattedEducation = { ...values, id: education.id || getId() };
    dispatch(setEducationState(formattedEducation));
    handleUpdateEducationList(formattedEducation);
  };

  const updateUI = (ui: string) => {
    if (ui === "educationForm") {
      setShowEducationForm(true);
    }
  };

  const handleUpdateEducationList = (values: educationProps) => {
    const checkIfEducationExist = educationList.find(
      (item) => item.id === values.id
    );

    if (checkIfEducationExist) {
      const newEducationList = educationList.map((edu) =>
        edu.id === values.id ? values : edu
      );
      console.log(newEducationList, "new");
      dispatch(setEducationListState(newEducationList));
    } else {
      dispatch(updateEducationList(values));
    }
    setShowEducationForm(false);
    dispatch(setEducationState(initialResumeFormValues.experience));
  };

  const handleEditEducation = (id: number | null) => {
    const educationToEdit = educationList.find((edu) => edu.id === id);
    dispatch(setEducationState(educationToEdit));
    setShowEducationForm(true);
  };

  const handleDeleteEducation = (id: number | null) => {
    console.log(id);
    const newEducationList = educationList.filter((edu) => edu.id !== id);
    dispatch(setEducationListState(newEducationList));
  };

  const formatDate = (date: Date | string): string => {
    if (!date) return "";
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const year = d.getFullYear();
    return `${month}-${year}`;
  };

  const previousForm = () => {
    router.push("/features/resume/experience");
  };

  const nextForm = () => {
    router.push("/features/resume/certifications");
  };

  return (
    <div className="w-full bg-[#f6f6f6] pr-10 pl-16 py-6">
      <h1 className="font-bold text-[24px]">Education Summary</h1>
      <p>Add, edit, or delete your Education</p>
      {!showEducationForm && (
        <div>
          {educationList.length !== 0 ? (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end">
                <button
                  className="flex gap-2 items-center"
                  onClick={() => updateUI("educationForm")}
                >
                  <FiPlusCircle />
                  Add another Education
                </button>
              </div>
              {educationList.map((edu, index) => (
                <div
                  className="border-2 border-gray-400 rounded-lg p-4 bg-white"
                  key={index}
                >
                  <div className="flex justify-between ">
                    <div className="flex flex-col gap-0">
                      <h1>{edu.schoolName}</h1>
                      <p className="-mt-3">{edu.location}</p>
                      <p>
                        <span>{edu.fieldOfStudy}</span>
                        <span>
                          ({formatDate(edu.startDate)} -{" "}
                          {formatDate(edu.endDate)})
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleEditEducation(edu.id)}
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleDeleteEducation(edu.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
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
            <CustomAddButton
              label="Add Education"
              onClick={() => updateUI("educationForm")}
            />
          )}
        </div>
      )}
      {showEducationForm && (
        <div>
          <EducationForm updateEducationInfo={updateEducationInfo} />
        </div>
      )}
    </div>
  );
}

export default EducationSummary;
