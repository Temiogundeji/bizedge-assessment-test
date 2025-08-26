import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalsState {
  clockIn: boolean;
  clockOut: boolean;
  startBreak: boolean;
  breakEnd: boolean;
  timeoffRequest: boolean;
  taskCreate: boolean;
}

interface LoadingState {
  global: boolean;
  attendance: boolean;
  tasks: boolean;
  timeoff: boolean;
}

interface UIState {
  activeTab: string;
  modals: ModalsState;
  loading: LoadingState;
}

const initialState: UIState = {
  activeTab: "home",
  modals: {
    clockIn: false,
    clockOut: false,
    startBreak: false,
    breakEnd: false,
    timeoffRequest: false,
    taskCreate: false,
  },
  loading: {
    global: false,
    attendance: false,
    tasks: false,
    timeoff: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    openModal: (state, action: PayloadAction<keyof ModalsState>) => {
      const modalName = action.payload;
      state.modals[modalName] = true;
    },
    closeModal: (state, action: PayloadAction<keyof ModalsState>) => {
      const modalName = action.payload;
      state.modals[modalName] = false;
    },
    closeAllModals: (state) => {
      (Object.keys(state.modals) as (keyof ModalsState)[]).forEach((key) => {
        state.modals[key] = false;
      });
    },
    setLoading: (
      state,
      action: PayloadAction<{ section: keyof LoadingState; status: boolean }>
    ) => {
      const { section, status } = action.payload;
      state.loading[section] = status;
    },
  },
});

export const {
  setActiveTab,
  openModal,
  closeModal,
  closeAllModals,
  setLoading,
} = uiSlice.actions;

export default uiSlice.reducer;
