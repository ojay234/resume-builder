"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/form/CustomInput";
import CustomSelect from "@/components/common/form/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import codes from "country-calling-code";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { experienceProps } from "@/app/types/formTypes";
import { updateExperience } from "@/app/store/formSlice";
import styled from "styled-components";

interface updateExperienceInfoProps {
  updateExperienceInfo: (values: experienceProps) => void;
}

function ExperienceForm({ updateExperienceInfo }: updateExperienceInfoProps) {
  const experienceState = useAppSelector((state) => state.experience);
  const quillRef = useRef(null);
  const dispatch = useAppDispatch();

  console.log(experienceState.experience, "quillBot");

  const previousForm = () => {
    console.log("previous");
  };

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const toolbar = quill.getModule("toolbar");

      // Set up default list format
      quill.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          const currentFormat = quill.getFormat(quill.getSelection());
          if (!currentFormat["list"]) {
            quill.format("list", "bullet");
          }
        }
      });
    }
  }, [quillRef]);

  return (
    <ExperienceFormContainer>
      <div className="flex gap-2">
        <p>{experienceState.jobTitle}</p>
        <p>{experienceState.company}</p>
      </div>
      <div className="">
        <Formik initialValues={experienceState} onSubmit={updateExperienceInfo}>
          {({ setFieldValue, values }) => (
            <Form>
              <div className="">
                <label htmlFor="experienceText">Experience</label>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={values.experience}
                  onChange={(content) => {
                    setFieldValue("experience", content);
                  }}
                  modules={{
                    toolbar: [[{ list: "bullet" }]],
                  }}
                />
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
    </ExperienceFormContainer>
  );
}

const ExperienceFormContainer = styled.div`
  .ql-container {
    border: 2px solid #d6d6d6; /* Custom border */
    border-radius: 8px; /* Optional: rounded corners */
  }
  .ql-toolbar {
    border: 2px solid #d6d6d6; /* Custom border */
    /* border-bottom: none; Remove bottom border to connect with container  */
    border-radius: 8px 8px 0 0; /* Optional: rounded top corners */
  }
`;

export default ExperienceForm;
