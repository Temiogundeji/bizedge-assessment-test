import { configureStore } from "@reduxjs/toolkit";
import attendanceReducer from "./features/attendance/attendanceSlices";
import tasksReducer from "./features/tasks/tasksSlice";
import timeOffReducer from "./features/time-offs/timeOffSlice";
import celebrationsReducer from "./features/celebrations/celebrationSlice";
import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    tasks: tasksReducer,
    timeoff: timeOffReducer,
    celebrations: celebrationsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
