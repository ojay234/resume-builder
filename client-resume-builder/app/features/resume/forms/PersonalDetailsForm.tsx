import React, { useState } from "react";
import { Formik, Form } from "formik";
import CustomInput from "@/components/common/form/CustomInput";
import codes from "country-calling-code";
import CustomSelect from "@/components/common/form/CustomSelect";
import CustomInputWithAddons from "@/components/common/form/CustomInputWithAddons";
import CustomButton from "@/components/common/CustomButton";
import ImageInput from "@/components/common/form/ImageInput";
import { updatePersonalDetails } from "@/app/store/formSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks";
import { PersonalDetailsProps } from "@/app/types/formTypes";
import { FaPlus } from "react-icons/fa";
import CustomAddButton from "@/components/common/CustomAddButton";

function PersonalDetailsForm() {
  const dispatch = useAppDispatch();
  const personalDetailsState = useAppSelector((state) => state.personalDetails);

  const imageChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imgFile = event.target.files?.[0];
    console.log(imgFile);
    if (imgFile) {
      try {
        const reader = new FileReader(); // Create a new FileReader instance
        reader.onload = function () {
          const imgDataURL = reader.result as string; // Get the data URL of the file

          dispatch(
            updatePersonalDetails({
              ...personalDetailsState,
              photo: imgDataURL,
            })
          );
          // Set the image data URL
        };
        reader.readAsDataURL(imgFile); // Read the file as a data URL
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
  };

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
        <Formik initialValues={personalDetailsState} onSubmit={nextForm}>
          <Form>
            <div className="flex flex-col gap-3 my-5">
              <ImageInput
                image={personalDetailsState.photo}
                imageChangeHandler={imageChangeHandler}
              />
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
                  selectName="code"
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
                    name="country"
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
                  <CustomInput name="zipCode" type="text" label="Zip Code" />
                </div>
              </div>
              <div>
                <CustomInput name="email" type="text" label="Email Address" />
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput name="linkedIn" type="text" label="LinkedIn" />
                </div>
                <div className="w-1/2">
                  <CustomInput name="twitter" type="text" label="Twitter" />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <CustomInput name="website" type="text" label="Website" />
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
        </Formik>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
