import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alert: {
    message: "",
    type: "",
  },
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    toggleAlert: (state, action) => {
      state.showAlert = action.payload;
    },
    changeAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const { toggleAlert, changeAlert } = alertSlice.actions;
export default alertSlice.reducer;

export const selectShowAlert = (state) => state.alert.showAlert;
export const selectAlert = (state) => state.alert.alert;
