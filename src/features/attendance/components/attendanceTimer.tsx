import { useState, useEffect } from "react";
import { Card } from "../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import type { RootState } from "../../../store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  clockIn,
  clockOut,
  openClockInModal,
  closeClockInModal,
  openClockOutModal,
  closeClockOutModal,
  setLocation,
} from "../attendanceSlices";
import { useSelector } from "react-redux";
import { closeModal, openModal } from "../../ui/uiSlice";

interface CurrentStatus {
  isClockedIn: boolean;
  location: string;
  currentTime: string;
  date: string;
  lastClockIn: string;
  onBreak: boolean;
  breakStartTime: string;
}

interface MonthlyStats {
  month: string;
  punctualityPerformance: {
    percentage: number;
    totalDaysPunctual: number;
    totalDaysLate: number;
  };
  attendancePerformance: {
    percentage: number;
    daysPresent: number;
    unauthorizedAbsent: number;
  };
  totalWorkingDays: number;
  totalDaysPresent: number;
  totalDaysAbsent: number;
}

interface AttendanceState {
  currentStatus: CurrentStatus;
  monthlyStats: MonthlyStats;
  attendanceHistory: any[];
  loading: boolean;
  error: string | null;
  clockInModal: boolean;
  breakEndModal: boolean;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

function AttendanceTimer() {
  const dispatch = useAppDispatch();

  const { currentStatus } = useAppSelector(
    (state: RootState) => state.attendance
  );
  const [timeCompleted, setTimeCompleted] = useState<{
    hours: number;
    minutes: number;
  }>({
    hours: 0,
    minutes: 0,
  });
  const today = formatDate(new Date());
  const clockInTime = currentStatus.lastClockIn
    ? `${currentStatus.lastClockIn} (${today})`
    : "Not clocked in";

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

  const handleLocationChange = (location: string) => {
    dispatch(setLocation(location));
  };

  const handleClockAction = () => {
    if (currentStatus.isClockedIn) {
      const currentTimeStr = formatDate(new Date());
      dispatch(clockOut({ time: currentTimeStr }));
    } else {
      dispatch(openModal("clockIn"));
    }
  };

  const formatElapsedTime = () => {
    if (!currentStatus.isClockedIn) {
      return { h1: "0", h2: "0", m1: "0", m2: "0" };
    }

    const hours = timeCompleted.hours.toString().padStart(2, "0");
    const minutes = timeCompleted.minutes.toString().padStart(2, "0");

    return {
      h1: hours[0],
      h2: hours[1],
      m1: minutes[0],
      m2: minutes[1],
    };
  };

  const timeDisplay = formatElapsedTime();

  const getAttendanceStatus = () => {
    if (!currentStatus.isClockedIn) return "-";
    if (currentStatus.onBreak) return "On Break";

    const expectedStartHour = 9;
    const clockInTime = new Date();
    const [hours] = currentStatus.lastClockIn.split(":");
    clockInTime.setHours(parseInt(hours));

    return parseInt(hours) <= expectedStartHour ? "Punctual" : "Late";
  };

  const isClockInOpen = useSelector(
    (state: RootState) => state.ui.modals.clockIn
  );
  const isClockOutOpen = useSelector(
    (state: RootState) => state.ui.modals.clockOut
  );

  return (
    <div className="flex flex-col w-full sm:w-[400px] 2xl:w-[450px]">
      {currentStatus.onBreak === true ? (
        <div className="bg-yellow-50 p-4 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-center">
            <p className="text-sm text-gray-600">Break Time</p>
            <p className="text-xs text-gray-500">Wed 17 Jul, 2023</p>
          </div>
          <div className="text-4xl font-bold text-yellow-700 mt-2">59:49</div>
          <div className="mt-4 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <button className="mt-4 w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500 transition duration-200">
            End Break
          </button>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
            Clock out
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <Card className="bg-[#5B7ED7] border-[#5B7E7] text-white p-4 sm:p-5">
            <div className="flex flex-col gap-2">
              <span className="text-sm sm:text-base">Attendance</span>
              <div className="text-lg sm:text-xl 2xl:text-2xl font-semibold">
                {today}
              </div>
              <div className="flex flex-row justify-between items-center">
                <Tabs
                  onValueChange={(location: string) =>
                    handleLocationChange(location)
                  }
                  defaultValue="remote"
                  className="py-2 sm:py-3"
                >
                  <TabsList className="bg-white mt-2 sm:mt-4">
                    <TabsTrigger
                      value="remote"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-l data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black"
                    >
                      Remote
                    </TabsTrigger>
                    <TabsTrigger
                      value="on-site"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-r data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black"
                    >
                      On-Site
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-sm">Status</span>
                  <span className="bg-white text-black w-20 sm:w-24 text-center rounded-full px-2 py-1 text-xs sm:text-sm font-medium">
                    {getAttendanceStatus()}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
      <Card className="bg-[#EBEFFA] border-[#EBEFFA] rounded-lg border-t-0 border-l-0 border-r-0 mt-4">
        <div className="flex flex-row items-center justify-between p-2 sm:p-3">
          <div className="flex flex-row items-center gap-1 sm:gap-2 font-bold">
            <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
              {timeDisplay?.h1}
            </span>
            <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
              {timeDisplay?.h2}
            </span>
            <span className="text-sm sm:text-base">:</span>
            <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
              {timeDisplay?.m1}
            </span>
            <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
              {timeDisplay?.m2}
            </span>
          </div>
          <div className="border-l border-gray-300 h-6 sm:h-8"></div>
          <div className="flex flex-col text-xs sm:text-sm text-gray-600 font-normal">
            <p>Last Clock-in Time & Date:</p>
            <p className="font-semibold">{clockInTime}</p>
          </div>
        </div>
      </Card>
      {currentStatus.isClockedIn === false ? (
        <div>
          {" "}
          <Button
            onClick={() => dispatch(openModal("clockIn"))}
            className="mt-4 bg-[#5B7ED7] text-white w-full py-2 sm:py-3 text-sm sm:text-base"
          >
            Clock In
          </Button>
        </div>
      ) : (
        <div className="flex gap-3 mt-3">
          <Button
            onClick={() => {
              dispatch(openModal("clockOut"));
            }}
            className="bg-[#4F75E5] hover:bg-[#3C5CC4] text-white font-medium px-6 py-2 rounded-md shadow-md max-w-full flex-2"
          >
            Clock Out
          </Button>

          <Button className="bg-[#F5A623] hover:bg-[#d48a15] text-black font-medium px-6 py-2 rounded-md shadow-md">
            Take Break
          </Button>
        </div>
      )}
      {/* Clock In Modal */}
      <Dialog
        open={isClockInOpen}
        onOpenChange={(open) =>
          open
            ? dispatch(openModal("clockIn"))
            : dispatch(closeModal("clockIn"))
        }
      >
        <DialogContent className="bg-white max-w-sm rounded-2xl p-6 text-center">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-gray-600 font-medium text-base">
              Confirm Clock In
            </DialogTitle>
          </DialogHeader>

          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src="https://placehold.co/600x400"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* Clock In Info */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900">
              Clock In at {formatTime(new Date())}
            </p>
            <p className="text-sm text-gray-500">
              {currentStatus?.location} •{" "}
              {new Date(today).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                dispatch(
                  clockIn({
                    time: formatTime(new Date()),
                    location: currentStatus.location,
                  })
                );
                dispatch(closeModal("clockIn"));
              }}
              className="bg-[#2898A4] hover:bg-teal-700 text-white w-full"
            >
              Yes, Clock In
            </Button>
            <Button
              variant="secondary"
              className="bg-teal-50 text-[#2898A4] hover:bg-teal-100 w-full"
              onClick={() => dispatch(closeModal("clockIn"))}
            >
              No, Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Clock Out Modal */}
      <Dialog
        open={isClockOutOpen}
        onOpenChange={(open) =>
          open
            ? dispatch(openModal("clockOut"))
            : dispatch(closeModal("clockOut"))
        }
      >
        <DialogContent className="bg-white max-w-sm rounded-2xl p-6 text-center">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-gray-600 font-medium text-base">
              Confirm Clock Out
            </DialogTitle>
          </DialogHeader>

          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src="https://placehold.co/600x400"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* Clock Out Info */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900">
              Clock Out at{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <p className="text-lg font-semibold text-gray-900">
              on{" "}
              {new Date(today).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
              ?
            </p>
            <p className="text-xs">{currentStatus?.location}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                dispatch(
                  clockOut({
                    time: formatTime(new Date()),
                    location: currentStatus.location,
                  })
                );
                dispatch(closeModal("clockOut"));
              }}
              className="bg-[#2898A4] hover:bg-teal-700 text-white w-full"
            >
              Yes, Clock Out at{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Button>
            <Button
              variant="secondary"
              className="bg-teal-50 text-[#2898A4] hover:bg-teal-100 w-full"
              onClick={() => dispatch(closeModal("clockOut"))}
            >
              Use My Current Time (8:30 AM)
            </Button>
            <Button
              variant="secondary"
              className="bg-white text-[#2898A4] hover:bg-teal-100 w-full border-0 shadow-none"
              // onClick={() => dispatch(closeModal("clockIn"))}
            >
              Enter a Custom Time
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AttendanceTimer;
