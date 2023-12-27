import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { userApi } from "./features/userApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userApi: userApi.reducer,
  },
  middleware(getDefaultMidlleware) {
    return getDefaultMidlleware().concat(userApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
