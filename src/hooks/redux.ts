import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAttendance = () => useAppSelector((state) => state.attendance);
export const useTasks = () => useAppSelector((state) => state.tasks);
export const useTimeoff = () => useAppSelector((state) => state.timeoff);
export const useCelebrations = () =>
  useAppSelector((state) => state.celebrations);
export const useUI = () => useAppSelector((state) => state.ui);
