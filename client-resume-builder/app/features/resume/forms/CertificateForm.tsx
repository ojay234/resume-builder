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

import { certificateProps } from "@/app/types/formTypes";

interface updateCertificateInfoProps {
  updateCertificateInfo: (values: certificateProps) => void;
}

function CertificateForm({
  updateCertificateInfo,
}: updateCertificateInfoProps) {
  const certificate = useAppSelector((state) => state.certificate);
  const dispatch = useAppDispatch();

  const previousForm = () => {
    console.log("previous");
  };

  return (
    <div>
      <Formik initialValues={certificate} onSubmit={updateCertificateInfo}>
        {() => (
          <Form>
            <div className="flex flex-col gap-3 my-5">
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="name"
                    type="text"
                    label="Name of Certification"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput
                    name="link"
                    type="text"
                    label="Link to certificate"
                  />
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
        )}
      </Formik>
    </div>
  );
}

export default CertificateForm;
