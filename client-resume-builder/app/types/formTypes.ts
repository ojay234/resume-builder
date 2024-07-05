import PersonalDetails from "../features/resume/personal-details/page";

export type resumeFormProps = {
  personalDetails: PersonalDetailsProps;
  experience: experienceProps;
  experiences: experienceProps[];
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
  website: string;
  linkedIn: string;
  twitter: string;
};

export type experienceProps = {
  jobTitle: string;
  companyName: string;
  country: string;
  state: string;
  city: string;
  startDate: string;
  endDate: string;
  experience: string;
};

// export type experiencesProps = {
//   company: experienceProps[];
// };
