"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/form/CustomInput";
import CustomSelect from "@/components/common/form/CustomSelect";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import codes from "country-calling-code";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { experienceProps } from "@/app/types/formTypes";
import styled from "styled-components";

interface updateCompanyInfoProps {
  updateCompanyInfo: (values: experienceProps) => void;
  exitCompanyForm: () => void;
}

function CompanyInfo({
  updateCompanyInfo,
  exitCompanyForm,
}: updateCompanyInfoProps) {
  const dispatch = useAppDispatch();
  const experienceState = useAppSelector((state) => state.experience);
  const [checkPresent, setCheckPresent] = useState<boolean>(false);

  useEffect(() => {
    setCheckPresent(experienceState.present);
  }, []);

  return (
    <div>
      <Formik initialValues={experienceState} onSubmit={updateCompanyInfo}>
        {({ values, setFieldValue }) => (
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
                {!checkPresent && (
                  <StyledDateContainer className="w-1/2 ">
                    <label>End Date</label>
                    <DatePicker
                      selected={
                        values.endDate ? new Date(values.endDate) : null
                      }
                      onChange={(date) => setFieldValue("endDate", date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                    />
                  </StyledDateContainer>
                )}
              </div>
              <div className="flex gap-3 items-center text-sm">
                <input
                  type="checkbox"
                  checked={checkPresent}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setCheckPresent(checked);
                    setFieldValue("present", checked);
                  }}
                />
                <span>Currently Work here</span>
              </div>
              <div className="flex gap-5 my-5">
                <CustomButton
                  text="Back"
                  clicked={exitCompanyForm}
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
    padding: 6px 10px;
    border: 1px solid #ccc;
    outline: none;
  }
`;

// const StyledCheckBox = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 12px;
// `;
export default CompanyInfo;
