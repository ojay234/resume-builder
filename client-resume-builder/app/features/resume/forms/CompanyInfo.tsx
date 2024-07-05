"use client";
import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/form/CustomInput";
import CustomSelect from "@/components/common/form/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import codes from "country-calling-code";

import { experienceProps } from "@/app/types/formTypes";
import { updateExperience } from "@/app/store/formSlice";

interface updateCompanyInfoProps {
  updateCompanyInfo: (values: experienceProps) => void;
}

function CompanyInfo({ updateCompanyInfo }: updateCompanyInfoProps) {
  const experienceState = useAppSelector((state) => state.experience);
  const dispatch = useAppDispatch();

  const previousForm = () => {
    console.log("previous");
  };

  return (
    <div>
      {" "}
      <Formik initialValues={experienceState} onSubmit={updateCompanyInfo}>
        <Form>
          <div className="flex flex-col gap-3 my-5">
            <div className="flex gap-5">
              <div className="w-1/2">
                <CustomInput name="jobTitle" type="text" label="Job Title" />
              </div>
              <div className="w-1/2">
                <CustomInput
                  name="company"
                  type="text"
                  label="Company or Organization Name"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-1/3">
                <CustomSelect
                  name="country"
                  type="select"
                  label="Country"
                  options={codes.map((code, index) => (
                    <option key={index}>{code.country}</option>
                  ))}
                />
              </div>
              <div className="w-1/3">
                <CustomInput
                  name="state"
                  type="text"
                  label="State / Province"
                />
              </div>
              <div className="w-1/3">
                <CustomInput name="city" type="text" label="City" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <CustomInput type="date" name="startDate" label="Start Date" />
              </div>
              <div className="w-1/2">
                <CustomInput type="date" name="endDate" label="End Date" />
              </div>
            </div>
            <div className="flex gap-5 my-5">
              <CustomButton
                text="Back"
                clicked={previousForm}
                color="transparent"
                width="100%"
              />
              <CustomButton text="Submit" type="submit" width="100%" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CompanyInfo;
