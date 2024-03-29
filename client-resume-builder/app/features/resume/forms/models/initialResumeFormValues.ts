import { resumeFormProps } from "@/app/types/formTypes";
import codes from "country-calling-code";

const initialCountry = codes.find((code) => code.country === "Nigeria");

const initialResumeFormValues: resumeFormProps = {
  personalDetails: {
    photo: "",
    firstName: "",
    lastName: "",
    desiredJob: "",
    code: `${initialCountry?.country} +${initialCountry?.countryCodes[0]}`,
    phone: "",
    country: initialCountry?.country,
    city: "",
    state: "",
    zipCode: "",
    email: "",
  },
};

export default initialResumeFormValues;
