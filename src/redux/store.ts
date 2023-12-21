import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "./slice/AuthSlice";
import ComplaintSlice from "./slice/ComplaintSlice";
import UserSlice from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    compalint: ComplaintSlice,
    users: UserSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
