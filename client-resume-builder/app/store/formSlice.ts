"use client";
import { createSlice } from "@reduxjs/toolkit";
import initialResumeFormValues from "../features/resume/forms/models/initialResumeFormValues";

export const formSlice = createSlice({
  name: "form",
  initialState: initialResumeFormValues,
  reducers: {
    updatePersonalDetails: (state, action) => {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    updateExperience: (state, action) => {
      state.experience = { ...state.experience, ...action.payload };
      console.log(state.experience, "state");
    },
    setExperienceState: (state, action) => {
      state.experience = action.payload;
    },
    updateExperiences: (state, action) => {
      state.experiences.push(action.payload);
      console.log(state.experience);
    },
    setExperiencesState: (state, action) => {
      state.experiences = action.payload;
    },
    setEducationState: (state, action) => {
      state.education = action.payload;
    },
    updateEducationList: (state, action) => {
      state.educationList.push(action.payload);
      console.log(state.education);
    },
    setEducationListState: (state, action) => {
      state.educationList = action.payload;
    },
    setCertificateState: (state, action) => {
      state.certificate = action.payload;
    },
    updateCertificates: (state, action) => {
      state.certificates.push(action.payload);
    },
    setCertificatesState: (state, action) => {
      state.certificates = action.payload;
    },
    setSkillsState: (state, action) => {
      state.skills = action.payload;
    },
    setSummaryState: (state, action) => {
      state.summary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updatePersonalDetails,
  updateExperience,
  updateExperiences,
  setExperiencesState,
  setExperienceState,
  setEducationState,
  setEducationListState,
  updateEducationList,
  updateCertificates,
  setCertificateState,
  setCertificatesState,
  setSkillsState,
  setSummaryState,
} = formSlice.actions;

export default formSlice.reducer;
