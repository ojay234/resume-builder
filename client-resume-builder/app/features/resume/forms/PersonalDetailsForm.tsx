import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
import CustomAddButton from "@/components/common/CustomAddButton";
import CustomDeletableInput from "@/components/common/form/CustomDeletableInput";

function PersonalDetailsForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const personalDetailsState = useAppSelector((state) => state.personalDetails);
  const [showDeletableInput, setShowDeletableInput] = useState({
    linkedin: false,
    website: false,
    twitter: false,
  });

  type DeletableInputKey = "linkedin" | "website" | "twitter";

  const deletableInputs: DeletableInputKey[] = [
    "linkedin",
    "twitter",
    "website",
  ];

  const addBtnClickHandler = (label: string) => {
    const formattedLabel = label.toLowerCase() as DeletableInputKey;
    setShowDeletableInput((prevState) => ({
      ...prevState,
      [formattedLabel]: true,
    }));
  };

  const imageChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imgFile = event.target.files?.[0];
    if (imgFile) {
      try {
        const reader = new FileReader();
        reader.onload = function () {
          const photo = reader.result as string;
          dispatch(updatePersonalDetails({ photo: photo }));
        };
        reader.readAsDataURL(imgFile);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
  };

  const previousForm = () => {
    console.log("previous");
  };

  const nextForm = (values: PersonalDetailsProps) => {
    dispatch(updatePersonalDetails({ ...values }));
    router.push("/features/resume/experience");
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
                    <option key={index} value={`+${code.countryCodes[0]}`}>
                      {code.country} +{code.countryCodes[0]}
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
                      <option key={index} value={code.country}>
                        {code.country}
                      </option>
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
              <div className="flex gap-5 flex-wrap">
                {showDeletableInput.linkedin ||
                  (personalDetailsState.linkedin && (
                    <div className="w-[48%]">
                      <CustomDeletableInput
                        name="linkedin"
                        type="text"
                        label="LinkedIn"
                        onDeleteBtnClick={() =>
                          setShowDeletableInput((prevState) => ({
                            ...prevState,
                            linkedIn: false,
                          }))
                        }
                      />
                    </div>
                  ))}
                {showDeletableInput.twitter ||
                  (personalDetailsState.twitter && (
                    <div className="w-[48%]">
                      <CustomDeletableInput
                        name="twitter"
                        type="text"
                        label="Twitter"
                        onDeleteBtnClick={() =>
                          setShowDeletableInput((prevState) => ({
                            ...prevState,
                            twitter: false,
                          }))
                        }
                      />
                    </div>
                  ))}
                {showDeletableInput.website ||
                  (personalDetailsState.website && (
                    <div className="w-[48%]">
                      <CustomDeletableInput
                        name="website"
                        type="text"
                        label="Website"
                        onDeleteBtnClick={() =>
                          setShowDeletableInput((prevState) => ({
                            ...prevState,
                            website: false,
                          }))
                        }
                      />
                    </div>
                  ))}
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
        <div className="flex flex-wrap gap-3">
          {deletableInputs.map((item, index) => (
            <div key={index}>
              {!showDeletableInput[item] && !personalDetailsState[item] && (
                <CustomAddButton
                  label={item}
                  onClick={() => addBtnClickHandler(item)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
