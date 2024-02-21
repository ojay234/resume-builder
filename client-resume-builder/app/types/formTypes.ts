import PersonalDetails from "../features/resume/personal-details/page";

export type resumeFormProps = {
  personalDetails: PersonalDetailsProps;
};

export type PersonalDetailsProps = {
  photo?: string;
  firstName: string;
  lastName: string;
  desiredJob?: string;
  phone: string;
  code: string | undefined;
  country: string | undefined;
  city: string;
  state: string;
  zipCode: string;
  email: string;
};
