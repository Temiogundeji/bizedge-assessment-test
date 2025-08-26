import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import type { RootState } from "@/store";
import {
  clockIn,
  clockOut,
  endBreak,
  setLocation,
  startBreak,
} from "../attendanceSlices";
import { openModal, closeModal } from "@/features/ui/uiSlice";
import { formatDate, formatTime } from "@/utils/date";

import AttendanceHeader from "./attendanceHeader";
import ElapsedTimeCard from "./elapsedTimeCard";
import AttendanceActions from "./attendanceActions";

import {
  ClockInModal,
  ClockOutModal,
  BreakTimeModal,
} from "@/features/ui/components/modal";

export default function AttendanceTimer() {
  const dispatch = useAppDispatch();
  const { currentStatus } = useAppSelector(
    (state: RootState) => state.attendance
  );
  const isClockInOpen = useAppSelector(
    (state: RootState) => state.ui.modals.clockIn
  );
  const isClockOutOpen = useAppSelector(
    (state: RootState) => state.ui.modals.clockOut
  );
  const isStartBreakOpen = useAppSelector(
    (state: RootState) => state.ui.modals.startBreak
  );

  const [timeCompleted, setTimeCompleted] = useState({ hours: 0, minutes: 0 });
  const today = formatDate(new Date());

  // Timer effect
  useEffect(() => {
    if (currentStatus.isClockedIn && currentStatus.lastClockIn) {
      const [hours, minutes] = currentStatus.lastClockIn.split(":").map(Number);
      const clockInTime = new Date();
      clockInTime.setHours(hours, minutes, 0, 0);

      const timer = setInterval(() => {
        const now = Date.now();
        const diff = now - clockInTime.getTime();
        setTimeCompleted({
          hours: Math.floor(diff / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentStatus.isClockedIn, currentStatus.lastClockIn]);

  const formatElapsedTime = () => {
    if (!currentStatus.isClockedIn)
      return { h1: "0", h2: "0", m1: "0", m2: "0" };
    const hours = timeCompleted.hours.toString().padStart(2, "0");
    const minutes = timeCompleted.minutes.toString().padStart(2, "0");
    return { h1: hours[0], h2: hours[1], m1: minutes[0], m2: minutes[1] };
  };

  const timeDisplay = formatElapsedTime();
  const lastClockIn = currentStatus.lastClockIn
    ? `${currentStatus.lastClockIn} (${today})`
    : "Not clocked in";

  // Handlers
  const handleLocationChange = (location: string) =>
    dispatch(setLocation(location));
  const handleClockIn = () => dispatch(openModal("clockIn"));
  const handleClockOut = () => dispatch(openModal("clockOut"));
  const handleStartBreak = () => dispatch(openModal("startBreak"));

  return (
    <div className="flex flex-col w-full sm:w-[400px] 2xl:w-[450px]">
      {currentStatus.onBreak ? (
        <div>
          <div className="bg-[#FDEDCE] md:h-[109px] py-5 px-5 rounded-lg shadow-md flex flex-col justify-center items-start">
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 font-semibold">Break Time</p>
              <p className="text-xs text-gray-500 font-normal">{today}</p>
            </div>
            <div className="text-4xl font-semibold text-yellow-700 mt-2">
              {timeDisplay.h1}
              {timeDisplay.h2}:{timeDisplay.m1}
              {timeDisplay.m2}
            </div>
          </div>
          <AttendanceActions
            isStartBreak={currentStatus.onBreak}
            isClockedIn
            onClockIn={handleClockIn}
            onClockOut={() => dispatch(endBreak())}
            onStartBreak={handleClockOut}
          />
        </div>
      ) : (
        <>
          <AttendanceHeader
            today={today}
            currentStatus={currentStatus}
            onLocationChange={handleLocationChange}
          />
          <ElapsedTimeCard
            timeDisplay={timeDisplay}
            lastClockIn={lastClockIn}
            today={today}
          />
          <AttendanceActions
            isClockedIn={currentStatus.isClockedIn}
            onClockIn={handleClockIn}
            onClockOut={handleClockOut}
            onStartBreak={handleStartBreak}
            isStartBreak={currentStatus.onBreak}
          />
        </>
      )}

      {/* Modals */}
      <ClockInModal
        open={isClockInOpen}
        onClose={() => dispatch(closeModal("clockIn"))}
        onConfirm={() => {
          dispatch(
            clockIn({
              time: formatTime(new Date()),
              location: currentStatus.location,
            })
          );
          dispatch(closeModal("clockIn"));
        }}
        currentStatus={currentStatus}
        today={today}
      />
      <ClockOutModal
        open={isClockOutOpen}
        onClose={() => dispatch(closeModal("clockOut"))}
        onConfirm={() => {
          dispatch(
            clockOut({
              time: formatTime(new Date()),
              location: currentStatus.location,
            })
          );
          dispatch(closeModal("clockOut"));
        }}
        currentStatus={currentStatus}
        today={today}
      />
      <BreakTimeModal
        open={isStartBreakOpen}
        onClose={() => dispatch(closeModal("startBreak"))}
        onConfirm={() => {
          dispatch(startBreak());
          dispatch(closeModal("startBreak"));
        }}
        currentStatus={currentStatus}
        today={today}
      />
    </div>
  );
}
