"use client";
import { createSlice } from "@reduxjs/toolkit";
import { formProps } from "../types/formTypes";

export const initialFormState: formProps = {
  personalDetails: {
    photo: "",
    firstName: "",
    lastName: "",
    desiredJob: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
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
