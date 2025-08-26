import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Birthday {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  birthday: string;
  avatar: string;
  isToday: boolean;
}

interface JobAnniversary {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  date: string;
  yearsCompleted: number;
  avatar: string;
}

interface NewHire {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  startDate: string;
  avatar: string;
}

type TabType = "birthdays" | "jobAnniversaries" | "newHires";

interface CelebrationsState {
  birthdays: Birthday[];
  jobAnniversaries: JobAnniversary[];
  newHires: NewHire[];
  activeTab: TabType;
  loading: boolean;
  error: string | null;
}

const celebrations: Omit<CelebrationsState, "activeTab" | "loading" | "error"> =
  {
    birthdays: [
      {
        id: uuidv4(),
        employeeId: "emp_001",
        name: "John Micheal",
        position: "Leader Designer",
        birthday: "Jan 23",
        avatar: "/api/placeholder/40/40",
        isToday: true,
      },
      {
        id: uuidv4(),
        employeeId: "emp_002",
        name: "Hassan Oladimeji",
        position: "Leader Designer",
        birthday: "Oct 1",
        avatar: "/api/placeholder/40/40",
        isToday: true,
      },
      {
        id: uuidv4(),
        employeeId: "emp_001",
        name: "Femi David",
        position: "Leader Designer",
        birthday: "Jan 23",
        avatar: "/api/placeholder/40/40",
        isToday: true,
      },
      {
        id: uuidv4(),
        employeeId: "emp_002",
        name: "John Micheal",
        position: "Leader Designer",
        birthday: "Oct 1",
        avatar: "/api/placeholder/40/40",
        isToday: true,
      },
    ],
    jobAnniversaries: [
      {
        id: uuidv4(),
        employeeId: "emp_003",
        name: "Emmanuel Chukwueze",
        position: "Senior Developer",
        date: "2023-01-23",
        yearsCompleted: 3,
        avatar: "https://placehold.co/600x400",
      },
    ],
    newHires: [
      {
        id: uuidv4(),
        employeeId: "emp_004",
        name: "Ahmed Audu",
        position: "Junior Designer",
        startDate: "2023-01-20",
        avatar: "https://placehold.co/600x400",
      },
    ],
  };

const initialState: CelebrationsState = {
  ...celebrations,
  activeTab: "birthdays",
  loading: false,
  error: null,
};

export const celebrationsSlice = createSlice({
  name: "celebrations",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabType>) => {
      state.activeTab = action.payload;
    },
    addBirthday: (state, action: PayloadAction<Omit<Birthday, "id">>) => {
      state.birthdays.push({ id: uuidv4(), ...action.payload });
    },
    addJobAnniversary: (
      state,
      action: PayloadAction<Omit<JobAnniversary, "id">>
    ) => {
      state.jobAnniversaries.push({ id: uuidv4(), ...action.payload });
    },
    addNewHire: (state, action: PayloadAction<Omit<NewHire, "id">>) => {
      state.newHires.push({ id: uuidv4(), ...action.payload });
    },
  },
});

export const { setActiveTab, addBirthday, addJobAnniversary, addNewHire } =
  celebrationsSlice.actions;

export default celebrationsSlice.reducer;
