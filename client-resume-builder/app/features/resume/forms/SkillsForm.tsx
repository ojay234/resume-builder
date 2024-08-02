"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik, FieldArray, FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import CustomDeletableInput from "@/components/common/form/CustomDeletableInput";
import CustomButton from "@/components/common/CustomButton";
import { FiPlusCircle } from "react-icons/fi";
import { setSkillsState } from "@/app/store/formSlice";

interface SkillsFormValues {
  skills: string[];
}

function SkillsForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const skillsFromState = useAppSelector((state) => state.skills);
  const initialSkills = skillsFromState.length > 0 ? skillsFromState : [""];
  const [skillsNum, setSkillNum] = useState<number>(initialSkills.length);

  const updateSkills = (values: SkillsFormValues) => {
    dispatch(setSkillsState(values));
    router.push("/features/resume/summary");
    console.log(values.skills);
  };

  const previousForm = () => {
    router.push("/features/resume/certifications");
  };

  return (
    <div className="w-full bg-[#f6f6f6] pr-10 pl-16 py-6">
      <div className="w-1/2">
        <h1 className="font-bold text-[24px]">Skills</h1>
        <p className="leading-[1.4rem] my-3 text-md">
          You re on a roll. Lets find relevant skills for the job you re
          applying for. Listing 6-10 skills is best.
        </p>
        <Formik
          initialValues={{ skills: initialSkills }}
          onSubmit={(
            values: SkillsFormValues,
            { setSubmitting }: FormikHelpers<SkillsFormValues>
          ) => {
            updateSkills(values);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="skills">
                {({ remove, push }) => (
                  <>
                    {values.skills.map((skill, index) => (
                      <div key={index}>
                        <CustomDeletableInput
                          label={`Skill ${index + 1}`}
                          name={`skills[${index}]`}
                          type="text"
                          onDeleteBtnClick={() => {
                            if (values.skills.length > 1) {
                              remove(index);
                              setSkillNum(values.skills.length - 1);
                            }
                          }}
                        />
                      </div>
                    ))}
                    <div className="flex gap-5 my-5">
                      <CustomButton
                        text="Back"
                        clicked={previousForm}
                        color="transparent"
                        width="100%"
                      />
                      <CustomButton text="Submit" type="submit" width="100%" />
                    </div>
                    <div className="my-2">
                      <button
                        className="flex gap-2 items-center text-bold"
                        onClick={() => {
                          push("");
                          setSkillNum(values.skills.length + 1);
                        }}
                      >
                        <FiPlusCircle />
                        Add another skill
                      </button>
                    </div>
                  </>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SkillsForm;
