import { configureStore } from "@reduxjs/toolkit";
import { attendanceSlice } from "../features/attendance/attendanceSlice";
import { tasksSlice } from "../features/tasks/tasksSlice";
import { celebrationsSlice } from "../features/celebrations/celebrationsSlice";
import { timeoffSlice } from "../features/timeoff/timeoffSlice";

export const store = configureStore({
  reducer: {
    attendance: attendanceSlice.reducer,
    tasks: tasksSlice.reducer,
    celebrations: celebrationsSlice.reducer,
    timeoff: timeoffSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
