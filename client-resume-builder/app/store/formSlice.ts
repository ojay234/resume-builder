"use client";
import { createSlice } from "@reduxjs/toolkit";
import initialResumeFormValues from "../features/resume/forms/models/initialResumeFormValues";

export const formSlice = createSlice({
  name: "form",
  initialState: initialResumeFormValues,
  reducers: {
    updatePersonalDetails: (state, action) => {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
      console.log(state.personalDetails);
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
  },
});

// Action creators are generated for each case reducer function
export const {
  updatePersonalDetails,
  updateExperience,
  updateExperiences,
  setExperiencesState,
  setExperienceState,
} = formSlice.actions;

export default formSlice.reducer;
