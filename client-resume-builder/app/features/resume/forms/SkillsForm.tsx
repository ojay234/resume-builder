"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useAppSelector } from "@/app/hooks/redux-hooks";
import CustomDeletableInput from "@/components/common/form/CustomDeletableInput";
import CustomButton from "@/components/common/CustomButton";

function SkillsForm() {
  const skills = useAppSelector((state) => state.skills);
  const [skillsNum, setSkillNum] = useState(skills.length || 2);

  const updateSkills = (values) => {
    console.log(values);
  };

  const handleDeleteInput = (index, values, setFieldValue) => {
    const updatedSkills = values.filter((_, i) => i !== index);
    setSkillNum(updatedSkills.length);
    setFieldValue("skills", updatedSkills);
  };

  const previousForm = () => {
    // Implement previous form logic here
  };

  return (
    <div className="w-full bg-[#f6f6f6] pr-10 pl-16 py-6">
      <div className="w-1/2">
        <Formik
          initialValues={{ skills: skills }}
          onSubmit={(values) => updateSkills(values.skills)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {Array.from({ length: skillsNum }).map((_, index) => (
                <div key={index}>
                  <CustomDeletableInput
                    label={`Skill ${index + 1}`}
                    name={`skills.${index}`}
                    type="text"
                    
                    onDeleteBtnClick={() =>
                      handleDeleteInput(index, values.skills, setFieldValue)
                    }
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SkillsForm;
