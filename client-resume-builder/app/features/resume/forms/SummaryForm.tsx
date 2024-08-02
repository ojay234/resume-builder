"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";

import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import styled from "styled-components";
import { setSummaryState } from "@/app/store/formSlice";
import initialResumeFormValues from "./models/initialResumeFormValues";
import { resumeFormProps } from "@/app/types/formTypes";

function SummaryForm() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const updateSummary = (values: resumeFormProps) => {
    dispatch(setSummaryState(values.summary));
    router.push("/features/resume/summary");
  };

  const previousForm = () => {
    router.push("/features/resume/certifications");
  };

  return (
    <SummaryFormContainer className="pr-10 pl-16 py-6">
      <div className="">
        <Formik
          initialValues={initialResumeFormValues}
          onSubmit={updateSummary}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="">
                <label htmlFor="SummaryText">Summary</label>
                <ReactQuill
                  theme="snow"
                  value={values.summary}
                  onChange={(content) => {
                    console.log(content);
                    setFieldValue("summary", content);
                  }}
                  modules={{
                    toolbar: [["bold"]],
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
    </SummaryFormContainer>
  );
}

const SummaryFormContainer = styled.div`
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

export default SummaryForm;
