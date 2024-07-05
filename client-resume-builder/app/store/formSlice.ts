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
      console.log(state.experience);
    },
    resetExperience: (state) => {
      state.experience = initialResumeFormValues.experience;
      console.log("Experience reset:", state.experience);
    },
    updateExperiences: (state, action) => {
      state.experiences.push(action.payload);
      console.log(state.experience);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updatePersonalDetails,
  updateExperience,
  updateExperiences,
  resetExperience,
} = formSlice.actions;

export default formSlice.reducer;
