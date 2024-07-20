import PersonalDetails from "../features/resume/personal-details/page";

export type resumeFormProps = {
  personalDetails: PersonalDetailsProps;
  experience: experienceProps;
  experiences: experienceProps[];
  education: educationProps;
  educationList: educationProps[];
  certificate: certificateProps;
  certificates: certificateProps[];
  skills: string[];
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
  linkedin: string;
  twitter: string;
};

export type experienceProps = {
  id: number | null;
  jobTitle: string;
  company: string;
  country: string;
  state: string;
  city: string;
  startDate: string;
  endDate: string;
  experience: string;
};

export type educationProps = {
  id: number | null;
  schoolName: string;
  location: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
};

export type certificateProps = {
  id: number | null;
  name: string;
  link: string;
};

