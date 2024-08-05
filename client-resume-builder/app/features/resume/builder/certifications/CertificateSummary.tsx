"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import {
  setCertificatesState,
  setCertificateState,
  updateCertificates,
} from "@/app/store/formSlice";
import { certificateProps } from "@/app/types/formTypes";

import CustomAddButton from "@/components/common/CustomAddButton";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import initialResumeFormValues from "../../forms/models/initialResumeFormValues";
import EducationForm from "../../forms/EducationForm";
import CertificateForm from "../../forms/CertificateForm";
import CustomButton from "@/components/common/CustomButton";

function CertificateSummary() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const certificate = useAppSelector((state) => state.certificate);
  const certificates = useAppSelector((state) => state.certificates);
  const [showCertificateForm, setShowCertificateForm] = useState(false);

  const getId = useCallback(() => {
    return certificates.length + 1;
  }, [certificates]);

  const updateCertificateInfo = (values: certificateProps) => {
    const formattedCertificate = { ...values, id: certificate.id || getId() };
    dispatch(setCertificateState(formattedCertificate));
    handleUpdateCertificates(formattedCertificate);
  };

  const updateUI = (ui: string) => {
    if (ui === "certificateForm") {
      setShowCertificateForm(true);
    }
  };

  const handleUpdateCertificates = (values: certificateProps) => {
    const checkIfCertificateExist = certificates.find(
      (item) => item.id === values.id
    );

    if (checkIfCertificateExist) {
      const newCertificates = certificates.map((cert) =>
        cert.id === values.id ? values : cert
      );
      console.log(newCertificates, "new");
      dispatch(setCertificatesState(newCertificates));
    } else {
      dispatch(updateCertificates(values));
    }
    setShowCertificateForm(false);
    dispatch(setCertificateState(initialResumeFormValues.certificate));
  };

  const handleEditCertificate = (id: number | null) => {
    const certificateToEdit = certificates.find((cert) => cert.id === id);
    dispatch(setCertificateState(certificateToEdit));
    setShowCertificateForm(true);
  };

  const handleDeleteCertificate = (id: number | null) => {
    const newCertificates = certificates.filter((cert) => cert.id !== id);
    dispatch(setCertificatesState(newCertificates));
  };

  const previousForm = () => {
    router.push("/features/resume/builder/certifications");
  };

  const nextForm = () => {
    router.push("/features/resume/builder/skills");
  };

  return (
    <div className="w-[60%]">
      <h1 className="font-bold text-[24px]">Education Summary</h1>
      <p>Add, edit, or delete your Education</p>
      {!showCertificateForm && (
        <div>
          {certificates.length !== 0 ? (
            <div className="flex flex-col gap-4">
              <div className="flex justify-end">
                <button
                  className="flex gap-2 items-center"
                  onClick={() => updateUI("certificateForm")}
                >
                  <FiPlusCircle />
                  Add another Certficate
                </button>
              </div>
              {certificates.map((cert, index) => (
                <div
                  className="border-2 border-gray-400 rounded-lg p-4 bg-white"
                  key={index}
                >
                  <div className="flex justify-between ">
                    <div className="flex flex-col gap-2">
                      <h1>{cert.name}</h1>
                      <p className="text-xs">{cert.link}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleEditCertificate(cert.id)}
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        className="text-white bg-black rounded-full p-2"
                        onClick={() => handleDeleteCertificate(cert.id)}
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
              label="Add Certificate"
              onClick={() => updateUI("certificateForm")}
            />
          )}
        </div>
      )}
      {showCertificateForm && (
        <div>
          <CertificateForm updateCertificateInfo={updateCertificateInfo} />
        </div>
      )}
    </div>
  );
}

export default CertificateSummary;
