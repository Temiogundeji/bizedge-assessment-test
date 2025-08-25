import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type TimeoffType = "annual" | "sick" | "pet";

interface TimeoffBalance {
  total: number;
  used: number;
  remaining: number;
}

interface Balances {
  annual: TimeoffBalance;
  sick: TimeoffBalance;
  pet: TimeoffBalance;
}

type TimeoffStatus = "upcoming" | "ongoing" | "completed" | "cancelled";

interface TimeoffRequest {
  id: string | number;
  employeeId: string;
  employeeName: string;
  type: TimeoffType;
  startDate: string;
  endDate: string;
  days: number;
  status: TimeoffStatus;
  reason: string;
  appliedDate: string;
}

interface TimeoffState {
  balances: Balances;
  requests: TimeoffRequest[];
  loading: boolean;
  error: string | null;
  selectedRequest: TimeoffRequest | null;
}

const timeoffData: Omit<TimeoffState, "loading" | "error" | "selectedRequest"> =
  {
    balances: {
      annual: { total: 20, used: 0, remaining: 20 },
      sick: { total: 5, used: 0, remaining: 5 },
      pet: { total: 10, used: 0, remaining: 10 },
    },
    requests: [
      {
        id: 1,
        employeeId: "58e196ec-14ee-4990-aeb5-5cea8dca28ee",
        employeeName: "John Micheal",
        type: "annual",
        startDate: "2023-01-23",
        endDate: "2023-01-25",
        days: 2,
        status: "upcoming",
        reason: "Family vacation",
        appliedDate: "2023-01-15",
      },
      {
        id: 2,
        employeeId: "7268b8a4-2b90-4a2d-ac66-b012f0759a26",
        employeeName: "David Silva",
        type: "annual",
        startDate: "2023-01-23",
        endDate: "2023-01-25",
        days: 2,
        status: "ongoing",
        reason: "Medical appointment",
        appliedDate: "2023-01-20",
      },
    ],
  };

const initialState: TimeoffState = {
  ...timeoffData,
  loading: false,
  error: null,
  selectedRequest: null,
};

export const timeoffSlice = createSlice({
  name: "timeoff",
  initialState,
  reducers: {
    requestTimeoff: (
      state,
      action: PayloadAction<
        Omit<TimeoffRequest, "id" | "status" | "appliedDate">
      >
    ) => {
      const newRequest: TimeoffRequest = {
        id: uuidv4(),
        ...action.payload,
        status: "upcoming",
        appliedDate: new Date().toISOString().split("T")[0],
      };
      state.requests.push(newRequest);
    },
    updateTimeoffRequest: (
      state,
      action: PayloadAction<{
        id: string | number;
        updates: Partial<TimeoffRequest>;
      }>
    ) => {
      const { id, updates } = action.payload;
      const requestIndex = state.requests.findIndex((req) => req.id === id);
      if (requestIndex !== -1) {
        state.requests[requestIndex] = {
          ...state.requests[requestIndex],
          ...updates,
        };
      }
    },
    cancelTimeoffRequest: (state, action: PayloadAction<string | number>) => {
      state.requests = state.requests.filter(
        (req) => req.id !== action.payload
      );
    },
    updateTimeoffBalance: (
      state,
      action: PayloadAction<{ type: TimeoffType; used: number }>
    ) => {
      const { type, used } = action.payload;
      if (state.balances[type]) {
        state.balances[type].used += used;
        state.balances[type].remaining =
          state.balances[type].total - state.balances[type].used;
      }
    },
    setSelectedRequest: (
      state,
      action: PayloadAction<TimeoffRequest | null>
    ) => {
      state.selectedRequest = action.payload;
    },
  },
});

export const {
  requestTimeoff,
  updateTimeoffRequest,
  cancelTimeoffRequest,
  updateTimeoffBalance,
  setSelectedRequest,
} = timeoffSlice.actions;

export default timeoffSlice.reducer;
