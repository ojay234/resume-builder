import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import CustomButton from "@/components/common/CustomButton";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { experienceProps } from "@/app/types/formTypes";
import styled from "styled-components";

interface UpdateExperienceInfoProps {
  updateExperienceInfo: (values: experienceProps) => void;
  exitExperienceForm: () => void;
}

function ExperienceForm({
  updateExperienceInfo,
  exitExperienceForm,
}: UpdateExperienceInfoProps) {
  const experienceState = useAppSelector((state) => state.experience);
  const quillRef = useRef<ReactQuill | null>(null);
  const dispatch = useAppDispatch();

  // Set initial content with bullet point
  const [editorContent, setEditorContent] = useState(() => {
    return experienceState.experience || "<ul><li><br></li></ul>";
  });

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
        delta.ops.forEach((op) => {
          if (op.insert && typeof op.insert === "string") {
            op.attributes = op.attributes || {};
            op.attributes.list = "bullet";
          }
        });
        return delta;
      });
    }
  }, []);

  return (
    <ExperienceFormContainer>
      <div className="flex gap-2">
        <p>{experienceState.jobTitle}</p>
        <p>{experienceState.company}</p>
      </div>
      <div>
        <Formik initialValues={experienceState} onSubmit={updateExperienceInfo}>
          {({ setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="experienceText">Experience</label>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={editorContent}
                  onChange={(content) => {
                    setFieldValue("experience", content);
                    setEditorContent(content);
                  }}
                  modules={{
                    toolbar: [[{ list: "bullet" }]],
                  }}
                />
                <div className="flex gap-5 my-5">
                  <CustomButton
                    text="Back"
                    clicked={exitExperienceForm}
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
    border-radius: 8px 8px 0 0; /* Optional: rounded top corners */
  }
`;

export default ExperienceForm;
