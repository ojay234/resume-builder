import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "@/components/common/custom-input";

function PersonalDetailsForm() {
  return (
    <div className="w-full bg-[#f6f6f6] px-10 py-6">
      <div className="md:w-[50%] ">
        <Formik>
          <Form>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="firstname"
                    type="text"
                    label="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput name="lastname" type="text" label="Last Name" />
                </div>
              </div>
              <div>
                <CustomInput
                  name="desiredJob"
                  type="text"
                  label="Desired Job Title"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
