"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  userInfo: {};
};
type userInfo = {
  _id: string;
  userId: string;
  username: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
  role: [];
};

const initialState: initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<userInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeCredentials: (state) => {
      state.userInfo = {};
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, removeCredentials } = userSlice.actions;

export default userSlice.reducer;
