import Navbar from "./components/layout/Navbar";
import MainNav from "./components/layout/MainNav";
import WelcomeHeader from "./components/layout/welcomeHeader";
import AttendanceTimer from "./features/attendance/components/attendanceTimer";
import Tasks from "./features/tasks/components/tasks";
import AttendanceSnapshot from "./features/attendance/components/attendanceSnapshot";
import Timeoff from "./features/time-offs/components/timeOff";
import Celebrations from "./features/celebrations/components/celebration";
import TimeoffRecord from "./features/time-offs/components/timeOffRecord";
import type { Task } from "./types/tasks";

interface TimeoffItem {
  type: string;
  days: number;
  color: string;
}

interface Employee {
  id: string | number;
  name: string;
  role: string;
  position: string;
  image: string;
  birthday: string;
}

interface TimeoffRecordItem {
  id: string | number;
  name: string;
  role: string;
  avatar: string;
  days: number;
  startDate: string;
  endDate: string;
  status: "upcoming" | "ongoing";
}

function App() {
  const employees: Employee[] = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      position: "Frontend Engineer",
      birthday: "Jan 23",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      position: "Backend Engineer",
      birthday: "Feb 10",
    },
    {
      id: 3,
      name: "Williams Oluwadarasimi",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      position: "Data Engineer",
      birthday: "Mar 5",
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      position: "Mobile Engineer",
      birthday: "Mar 7",
    },
  ];

  const timeoffRecords: TimeoffRecordItem[] = [
    {
      id: 1,
      name: "John Micheal",
      role: "Leader Designer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "upcoming",
    },
    {
      id: 2,
      name: "John Micheal",
      role: "Leader Designer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "ongoing",
    },
    {
      id: 3,
      name: "John Micheal",
      role: "Leader Designer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "upcoming",
    },
    {
      id: 4,
      name: "John Micheal",
      role: "Leader Designer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "upcoming",
    },
  ];

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

  const tasks: Task[] = [
    {
      id: "1",
      title: "Create new onboarding process",
      status: "in-progress",
      priority: "high",
      actions: ["Review", "Comment"],
      dueDate: "2025-09-01",
    },
    {
      id: "2",
      title: "Add new employee to database",
      status: "pending",
      priority: "medium",
      actions: ["Assign"],
    },
    {
      id: "3",
      title: "Create new design assets",
      status: "completed",
      priority: "low",
      actions: ["Review", "Share"],
    },
    {
      id: "4",
      title: "Update project documentation",
      status: "in-progress",
      priority: "medium",
      actions: ["Edit"],
      dueDate: "2025-08-30",
    },
    {
      id: "5",
      title: "Schedule team meeting",
      status: "pending",
      priority: "high",
      actions: ["Send Invite", "Prepare Agenda"],
    },
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
              <Tasks tasks={tasks} />
            </div>
            <AttendanceSnapshot />
            <Timeoff
              timeoffData={timeoffData}
              dropdownOptions={dropdownOptions}
            />
          </div>
          {/* Right Column */}
          <div className="flex flex-col flex-1 xl:basis-1/3">
            <Celebrations employees={employees} />
            <TimeoffRecord timeoffRecords={timeoffRecords} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
