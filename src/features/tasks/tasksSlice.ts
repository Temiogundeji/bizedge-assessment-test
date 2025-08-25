import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../../types/tasks";

type FilterType = "all" | "pending" | "in-progress" | "completed";

interface TasksState {
  tasks: Task[];
  filter: FilterType;
  loading: boolean;
  error: string | null;
}

const tasks: Task[] = [
  {
    id: "cfa02746-e9ac-44dc-924c-eb40772dc5db",
    title: "Create new onboarding process",
    status: "in-progress",
    priority: "high",
    actions: ["Review", "Comment"],
    dueDate: "2025-09-01",
  },
  {
    id: "675a448b-61ab-4a5e-af92-dd5bbb612035",
    title: "Add new employee to database",
    status: "pending",
    priority: "medium",
    actions: ["Assign"],
  },
  {
    id: "2b5bcdb9-c2a5-49fe-bd0a-e3fd0d3e2140",
    title: "Create new design assets",
    status: "completed",
    priority: "low",
    actions: ["Review", "Share"],
  },
  {
    id: "5b7a78cb-63f4-4cdd-93ef-fed700fd46c6",
    title: "Update project documentation",
    status: "in-progress",
    priority: "medium",
    actions: ["Edit"],
    dueDate: "2025-08-30",
  },
  {
    id: "bec76d1e-d432-4ee7-b6e8-7c0b97b4fa28",
    title: "Schedule team meeting",
    status: "pending",
    priority: "high",
    actions: ["Send Invite", "Prepare Agenda"],
  },
];

const initialState: TasksState = {
  tasks,
  filter: "all",
  loading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id" | "status">>) => {
      state.tasks.push({
        id: uuidv4(),
        ...action.payload,
        status: "pending",
      });
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Task> }>
    ) => {
      const { id, updates } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...updates,
        };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    markTaskCompleted: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = "completed";
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, setFilter, markTaskCompleted } =
  tasksSlice.actions;

export default tasksSlice.reducer;
