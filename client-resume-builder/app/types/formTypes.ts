import PersonalDetails from "../builder/resume/personal-details/page";

export type formProps = {
  personalDetails: PersonalDetailsProps;
};

export type PersonalDetailsProps = {
  photo?: string;
  firstName: string;
  lastName: string;
  desiredJob?: string;
  phoneNumber: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
};
