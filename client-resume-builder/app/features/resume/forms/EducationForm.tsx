"use client";
import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/form/CustomInput";
import CustomSelect from "@/components/common/form/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import codes from "country-calling-code";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { educationProps } from "@/app/types/formTypes";
import styled from "styled-components";

interface updateEducationInfoProps {
  updateEducationInfo: (values: educationProps) => void;
}

function EducationForm({ updateEducationInfo }: updateEducationInfoProps) {
  const educationState = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();

  const previousForm = () => {
    console.log("previous");
  };

  return (
    <div>
      <Formik initialValues={educationState} onSubmit={updateEducationInfo}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="flex flex-col gap-3 my-5">
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="schoolName"
                    type="text"
                    label="School Name"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput
                    name="location"
                    type="text"
                    label="School Location"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="degree"
                    type="text"
                    label="Degree or Program"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput
                    name="fieldOfStudy"
                    type="text"
                    label="Field of Study"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <StyledDateContainer className="w-1/2">
                  <label>Start Date</label>

                  <DatePicker
                    selected={
                      values.startDate ? new Date(values.startDate) : null
                    }
                    onChange={(date) => setFieldValue("startDate", date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                  />
                </StyledDateContainer>
                <StyledDateContainer className="w-1/2 ">
                  <label>End Date</label>
                  <DatePicker
                    selected={values.endDate ? new Date(values.endDate) : null}
                    onChange={(date) => setFieldValue("endDate", date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                  />
                </StyledDateContainer>
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
        )}
      </Formik>
    </div>
  );
}

const StyledDateContainer = styled.div`
  .react-datepicker-wrapper {
    display: block !important;
  }

  label {
    font-size: 12px;
  }

  input {
    border-radius: 5px;
    width: 100%;
    padding: 2px 20px;
    border: 1px solid #ccc;
    outline: none;
  }
`;
export default EducationForm;
