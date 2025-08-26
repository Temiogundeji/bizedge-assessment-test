import Navbar from "@/components/layout/Navbar";
import MainNav from "@/components/layout/MainNav";
import WelcomeHeader from "@/components/layout/WelcomeHeader";
import AttendanceTimer from "@/features/attendance/components/attendanceTimer";
import Tasks from "@/features/tasks/components/tasks";
import AttendanceSnapshot from "@/features/attendance/components/attendanceSnapshot";
import Timeoff from "@/features/time-offs/components/timeOff";
import Celebrations from "@/features/celebrations/components/celebration";
import TimeoffRecord from "@/features/time-offs/components/timeOffRecord";

interface TimeoffItem {
  type: string;
  days: number;
  color: string;
}

function App() {
  const timeoffData: TimeoffItem[] = [
    { type: "Annual Timeoff", days: 20, color: "#ffffff" },
    { type: "Sick Timeoff", days: 5, color: "#ffffff" },
    { type: "Pet Timeoff", days: 10, color: "#ffffff" },
    { type: "Vacation Timeoff", days: 15, color: "#ffffff" },
    { type: "Personal Timeoff", days: 8, color: "#ffffff" },
    { type: "Emergency Timeoff", days: 3, color: "#ffffff" },
  ];

  const dropdownOptions: string[] = [
    "Maternity/Paternity Leave",
    "Study Leave",
    "Sabbatical",
    "Bereavement Leave",
    "Jury Duty",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <header className="w-full">
        <Navbar />
        <div className="h-0.5 border-[#E1E1E1] mx-[168.11px] sm:mx-[5%]"></div>
        <MainNav />
      </header>
      <div className="px-[168.11px] sm:px-[5%] max-w-screen-2xl mx-auto flex-1">
        <WelcomeHeader />
        <main className="flex flex-col xl:flex-row w-full gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="flex flex-col flex-1 xl:basis-2/3">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
              <AttendanceTimer />
              <Tasks />
            </div>
            <AttendanceSnapshot />
            <Timeoff
              timeoffData={timeoffData}
              dropdownOptions={dropdownOptions}
            />
          </div>
          {/* Right Column */}
          <div className="flex flex-col flex-1 xl:basis-1/3">
            <Celebrations />
            <TimeoffRecord />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
