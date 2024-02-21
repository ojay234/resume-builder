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
  },
});

// Action creators are generated for each case reducer function
export const { updatePersonalDetails } = formSlice.actions;

export default formSlice.reducer;
