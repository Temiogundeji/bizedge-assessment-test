import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Clock, Target, Info, Calendar } from "lucide-react";

import Navbar from "./components/layout/Navbar";
import MainNav from "./components/layout/MainNav";
import WelcomeHeader from "./components/feature/welcomeHeader";

function App() {
  const currentUser = {
    name: "Williams Oluwadamilare",
    avatar: "/api/placeholder/40/40",
  };

  const attendanceData = {
    currentTime: "08:30",
    date: "Wed 17 Jul, 2023",
    lastClockIn: "08:00 AM (18 Nov, 2024)",
    status: "on-site",
    punctualityPerformance: 91,
    attendancePerformance: 90,
    daysPunctual: 21,
    daysLate: 0,
    daysPresent: 7,
    unauthorizedAbsent: 0,
  };

  const tasks = [
    { id: 1, title: "Create the New Onboar...", completed: false },
    { id: 2, title: "Add New Employee", completed: true },
    { id: 3, title: "Create New Designs", completed: false },
  ];

  const birthdays = [
    {
      id: 1,
      name: "John Micheal",
      position: "Leader Designer",
      date: "Jan 23",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 2,
      name: "John Micheal",
      position: "Leader Designer",
      date: "Jan 23",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const timeoffRequests = [
    {
      id: 1,
      name: "John Micheal",
      position: "Leader Designer",
      days: 2,
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 2,
      name: "John Micheal",
      position: "Leader Designer",
      days: 2,
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      avatar: "/api/placeholder/32/32",
    },
    {
      id: 3,
      name: "John Micheal",
      position: "Leader Designer",
      days: 2,
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      avatar: "/api/placeholder/32/32",
    },
  ];

  const timeoffBalances = {
    annual: { total: 20, used: 0 },
    sick: { total: 5, used: 0 },
    personal: { total: 10, used: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 min-w-full">
      <header className="min-w-full">
        <Navbar />
        {/* Main Navigation */}
        <div className="h-0.5 px-40 border-[#E1E1E1] mx-4"></div>
        <MainNav />
      </header>
      <div className="px-32">
        <WelcomeHeader />
        <div className="p-3">
          <div className="flex flex-wrap -mx-3 gap-6">
            {/* Left Column */}
            <div className="w-full lg:w-2/3 flex flex-col space-y-6 px-3">
              {/* Attendance Card */}
              <Card className="bg-blue-500 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Attendance</p>
                      <p className="text-blue-100">{attendanceData.date}</p>
                    </div>
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Badge
                      variant={
                        attendanceData.status === "remote"
                          ? "secondary"
                          : "default"
                      }
                      className={
                        attendanceData.status === "remote"
                          ? "bg-white text-gray-800"
                          : "bg-gray-800 text-white"
                      }
                    >
                      Remote
                    </Badge>
                    <Badge
                      variant={
                        attendanceData.status === "on-site"
                          ? "secondary"
                          : "default"
                      }
                      className={
                        attendanceData.status === "on-site"
                          ? "bg-white text-gray-800"
                          : "bg-gray-600 text-white"
                      }
                    >
                      On-Site
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-sm text-blue-100">Status</span>
                      <Badge className="ml-2 bg-yellow-400 text-gray-800">
                        Punctual
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">
                      {attendanceData.currentTime.replace(":", " : ")} 0
                    </div>
                    <p className="text-blue-100 text-sm">
                      Last Clock-in Time & Date:
                    </p>
                    <p className="text-blue-100 text-sm">
                      {attendanceData.lastClockIn}
                    </p>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    <Clock className="w-4 h-4 mr-2" />
                    Clock In
                  </Button>
                </CardContent>
              </Card>

              {/* Performance Cards */}
              <div className="flex flex-wrap -mx-3 gap-6">
                <div className="w-full md:w-1/2 px-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        Punctuality Performance
                        <Info className="w-4 h-4 ml-2 text-gray-400" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4">
                        {attendanceData.punctualityPerformance}%
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-gray-600">Days Punctual</p>
                          <p className="text-xl font-bold text-blue-600">
                            {attendanceData.daysPunctual} Days
                          </p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                          <p className="text-gray-600">Days Late</p>
                          <p className="text-xl font-bold text-blue-600">
                            {attendanceData.daysLate} Day
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          Attendance Performance
                          <Info className="w-4 h-4 ml-2 text-gray-400" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-4">
                          {attendanceData.attendancePerformance}%
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-gray-600">Days Present</p>
                            <p className="text-xl font-bold text-yellow-600">
                              {attendanceData.daysPresent} Days
                            </p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-gray-600">Unauthorized Absent</p>
                            <p className="text-xl font-bold text-yellow-600">
                              {attendanceData.unauthorizedAbsent} Day
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Card>
                </div>
              </div>

              {/* Attendance Snapshot */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Attendance Snapshot - January</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-4" />
                    <p>Attendance calendar view would go here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Timeoff Section */}
              <Card>
                <CardHeader>{/* Header content */}</CardHeader>
                <CardContent>
                  <div className="flex flex-wrap -mx-3 gap-4">
                    <div className="w-full md:w-1/3 px-3 text-center p-6 border rounded-lg">
                      {/* Annual Timeoff */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 text-center p-6 border rounded-lg">
                      {/* Sick Timeoff */}
                    </div>
                    <div className="w-full md:w-1/3 px-3 text-center p-6 border rounded-lg">
                      {/* Personal Timeoff */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-6 px-3">
              {/* Tasks Widget */}
              <Card>{/* Tasks content */}</Card>

              {/* Celebrations Widget */}
              <Card>{/* Celebrations content */}</Card>

              {/* Timeoff Record Widget */}
              <Card>{/* Timeoff Record content */}</Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
