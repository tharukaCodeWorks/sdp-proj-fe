import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "./slice/AuthSlice";
import ComplaintSlice from "./slice/ComplaintSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    compalint: ComplaintSlice
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
