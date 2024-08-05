"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Form, Formik, FieldArray, FormikHelpers } from "formik";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import CustomDeletableInput from "@/components/common/form/CustomDeletableInput";
import CustomButton from "@/components/common/CustomButton";
import { FiPlusCircle } from "react-icons/fi";
import { setSkillsState } from "@/app/store/formSlice";
import { resumeFormProps } from "@/app/types/formTypes";

function SkillsForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.skills); // Assuming formState is the skills state

  const updateSkills = (values: resumeFormProps) => {
    dispatch(setSkillsState(values.skills)); // Assuming only skills are updated
    router.push("/features/resume/builder/summary");
  };

  const previousForm = () => {
    router.push("/features/resume/builder/certifications");
  };

  return (
    <div className="w-[60%]">
      <div className="w-1/2">
        <h1 className="font-bold text-[24px]">Skills</h1>
        <p className="leading-[1.4rem] my-3 text-md">
          You are on a roll. Let's find relevant skills for the job you're
          applying for. Listing 6-10 skills is best.
        </p>
        <Formik
          initialValues={{ skills: skills || [""] }}
          onSubmit={(
            values: resumeFormProps,
            { setSubmitting }: FormikHelpers<resumeFormProps>
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
                        type="button"
                        onClick={() => push("")}
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
