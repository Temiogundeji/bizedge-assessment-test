import { createSlice } from "@reduxjs/toolkit";

const attendanceData = {
  currentStatus: {
    isClockedIn: false,
    location: "Remote", //Remote or onSite
    currentTime: "09:30",
    date: "Wed 17 Jul, 2023",
    lastClockIn: "",
    onBreak: false,
    breakStartTime: "",
  },
  monthlyStats: {
    month: "January",
    punctualityPerformance: {
      percentage: 91,
      totalDaysPunctual: 21,
      totalDaysLate: 0,
    },
    attendancePerformance: {
      percentage: 91,
      daysPresent: 80,
      unauthorizedAbsent: 10,
    },
    totalWorkingDays: 21,
    totalDaysPresent: 7,
    totalDaysAbsent: 0,
  },
  attendanceHistory: [
    {
      id: 1,
      date: "2023-07-17",
      clockIn: "09:30",
      clockOut: null,
      status: "Present",
      location: "Remote",
      totalHours: null,
    },
    {
      id: 2,
      date: "2023-07-16",
      clockIn: "08:45",
      clockOut: "17:30",
      status: "Present",
      location: "On-Site",
      totalHours: 8.75,
    },
  ],
};

const initialState = {
  ...attendanceData,
  loading: false,
  error: null,
  clockInModal: false,
  clockOutModal: false,
  breakEndModal: false,
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    clockIn: (state, action) => {
      const { time, location } = action.payload;
      state.currentStatus.isClockedIn = true;
      state.currentStatus.lastClockIn = time;
      state.currentStatus.location = location;

      state.attendanceHistory.unshift({
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        clockIn: time,
        clockOut: null,
        status: "Present",
        location,
        totalHours: null,
      });
    },
    clockOut: (state, action) => {
      const { time, date } = action.payload;
      state.currentStatus.isClockedIn = false;
      state.currentStatus.onBreak = false;

      if (state.attendanceHistory.length > 0) {
        state.attendanceHistory[0].clockOut = time;

        const clockInTime = new Date(state.attendanceHistory[0].clockIn);
        const clockOutTime = new Date(time);
        state.attendanceHistory[0].totalHours =
          (clockOutTime.getTime() - clockInTime.getTime()) / (1000 * 60 * 60);
      }
    },
    startBreak: (state) => {
      state.currentStatus.onBreak = true;
      state.currentStatus.breakStartTime = new Date().toLocaleTimeString(
        "en-US",
        {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    },
    endBreak: (state) => {
      state.currentStatus.onBreak = false;
      state.currentStatus.breakStartTime = "";
    },
    setLocation: (state, action) => {
      state.currentStatus.location = action.payload;
    },
    openClockInModal: (state) => {
      state.clockInModal = true;
    },
    closeClockInModal: (state) => {
      state.clockInModal = false;
    },
    openClockOutModal: (state) => {
      state.clockOutModal = true;
    },
    closeClockOutModal: (state) => {
      state.clockOutModal = false;
    },
    toggleBreakEndModal: (state) => {
      state.breakEndModal = !state.breakEndModal;
    },
    updateMonthlyStats: (state, action) => {
      state.monthlyStats = { ...state.monthlyStats, ...action.payload };
    },
  },
});

export default attendanceSlice.reducer;
export const {
  clockIn,
  clockOut,
  startBreak,
  endBreak,
  setLocation,
  openClockOutModal,
  closeClockOutModal,
  openClockInModal,
  closeClockInModal,
  toggleBreakEndModal,
  updateMonthlyStats,
} = attendanceSlice.actions;
