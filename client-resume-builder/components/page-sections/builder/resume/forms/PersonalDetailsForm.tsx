import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "@/components/common/form/custom-input";
import codes from "country-calling-code";
import CustomSelect from "@/components/common/form/custom-select";
import CustomInputWithAddons from "@/components/common/form/custom-input-with-addons";
import CustomButton from "@/components/common/custom-button";
import ImageInput from "@/components/common/form/image-input";
import { initialFormState, updatePersonalDetails } from "@/app/store/formSlice";
import { useDispatch } from "react-redux";
import { PersonalDetailsProps } from "@/app/types/formTypes";

function PersonalDetailsForm() {
  const dispatch = useDispatch();
  const previousForm = () => {
    console.log("previous");
  };

  const nextForm = (values: PersonalDetailsProps) => {
    console.log("next");
    dispatch(updatePersonalDetails(values));
  };

  return (
    <div className="w-full bg-[#f6f6f6] pr-10 pl-16 py-6">
      <div className="md:w-[50%] ">
        <h1 className="font-bold text-[24px]">Contact</h1>
        <p className="leading-[1.4rem] my-3 text-md">
          Let&apos;s start with the basics. To ensure employers can reach you,
          input at least your name, email, and phone number.
        </p>
        <Formik
          initialValues={initialFormState.personalDetails}
          onSubmit={nextForm}
        >
          <Form>
            <div className="flex flex-col gap-3 my-5">
              <ImageInput />
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="firstName"
                    type="text"
                    label="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput name="lastName" type="text" label="Last Name" />
                </div>
              </div>
              <div>
                <CustomInput
                  name="desiredJob"
                  type="text"
                  label="Desired Job Title"
                />
              </div>
              <div className="flex relative">
                <CustomInputWithAddons
                  inputName="phone"
                  inputType="text"
                  selectName="codes"
                  label="Phone"
                  options={codes.map((code, index) => (
                    <option key={index}>
                      <span>
                        {code.country} {""}
                      </span>
                      <span>+{code.countryCodes[0]}</span>
                    </option>
                  ))}
                />
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomSelect
                    name="Country"
                    type="select"
                    label="Country"
                    options={codes.map((code, index) => (
                      <option key={index}>{code.country}</option>
                    ))}
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput name="city" type="text" label="City" />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput
                    name="state"
                    type="text"
                    label="State / Province"
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput name="zipcode" type="text" label="Zip Code" />
                </div>
              </div>
              <div>
                <CustomInput name="email" type="text" label="Email Address" />
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
        </Formik>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
