import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from "@/store/slices/overlaySlice";
import settingsReducer from "@/store/slices/userSlice"

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
