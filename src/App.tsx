import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  CalendarDays,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Navbar from "./components/layout/Navbar";
import MainNav from "./components/layout/MainNav";
import WelcomeHeader from "./components/feature/welcomeHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { BookText, Cake, Info } from "lucide-react";
import SVGComponent from "./lib/svg-component";

function App() {
  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      birthday: "Jan 23",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      birthday: "Feb 10",
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      birthday: "Mar 5",
    },
  ];

  const timeoffRecords = [
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timeoffData = [
    { type: "Annual Timeoff", days: 20, color: "#ffffff" },
    { type: "Sick Timeoff", days: 5, color: "#ffffff" },
    { type: "Pet Timeoff", days: 10, color: "#ffffff" },
    { type: "Vacation Timeoff", days: 15, color: "#ffffff" },
    { type: "Personal Timeoff", days: 8, color: "#ffffff" },
    { type: "Emergency Timeoff", days: 3, color: "#ffffff" },
  ];

  const itemsPerSlide = { base: 1, sm: 2, xl: 3, "2xl": 4 };
  const totalSlides = Math.ceil(timeoffData.length / itemsPerSlide["2xl"]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide["2xl"];
    return timeoffData.slice(start, start + itemsPerSlide["2xl"]);
  };

  const dropdownOptions = [
    "Maternity/Paternity Leave",
    "Study Leave",
    "Sabbatical",
    "Bereavement Leave",
    "Jury Duty",
  ];

  const getStatusBadge = (status) => {
    if (status === "upcoming") {
      return (
        <Badge variant="secondary" className="bg-[#FF6666] hover:bg-red-100">
          3
        </Badge>
      );
    } else if (status === "ongoing") {
      return (
        <Badge variant="secondary" className="bg-[#FF6666] hover:bg-red-100">
          2
        </Badge>
      );
    }
  };

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
            {/* Timer Row and Tasks Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Attendance Timer */}
              <div className="flex flex-col w-full sm:w-[400px] 2xl:w-[450px]">
                <Card className="bg-[#5B7ED7] border-[#5B7ED7] text-white p-4 sm:p-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm sm:text-base">Attendance</span>
                    <div className="text-lg sm:text-xl 2xl:text-2xl font-semibold">
                      Wed 17, Jul 2023
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Tabs defaultValue="remote" className="py-2 sm:py-3">
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
                        <span className="text-xs sm:text-sm">Status</span>
                        <span className="bg-white text-black w-20 sm:w-24 text-center rounded-full px-2 py-1 text-xs sm:text-sm font-medium">
                          Punctual
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-[#EBEFFA] border-[#EBEFFA] rounded-lg border-t-0 border-l-0 border-r-0 mt-4">
                  <div className="flex flex-row items-center justify-between p-2 sm:p-3">
                    <div className="flex flex-row items-center gap-1 sm:gap-2 font-bold">
                      <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
                        0
                      </span>
                      <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
                        8
                      </span>
                      <span className="text-sm sm:text-base">:</span>
                      <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
                        3
                      </span>
                      <span className="bg-gray-100 rounded-lg shadow-md py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
                        0
                      </span>
                    </div>
                    <div className="border-l border-gray-300 h-6 sm:h-8"></div>
                    <div className="flex flex-col text-xs sm:text-sm text-gray-600 font-normal">
                      <p>Last Clock-in Time & Date:</p>
                      <p className="font-semibold">08:00 AM (18 Nov, 2024)</p>
                    </div>
                  </div>
                </Card>
                <Button className="mt-4 bg-[#5B7ED7] text-white w-full py-2 sm:py-3 text-sm sm:text-base">
                  Clock In
                </Button>
              </div>
              {/* Tasks */}
              <div className="flex w-full sm:w-[400px] 2xl:w-[450px]">
                <Card className="w-full bg-white border-0 shadow-md">
                  <header className="flex flex-row justify-between px-3 sm:px-4 py-2 sm:py-3 items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <BookText
                        color="#E61C5C"
                        size={16}
                        className="sm:h-5 sm:w-5"
                      />
                      <h3 className="font-semibold text-[#545454] text-sm sm:text-base">
                        Tasks
                      </h3>
                      <span className="bg-[#E61C5C] text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                        5
                      </span>
                    </div>
                    <span className="font-semibold text-[#545454] text-sm sm:text-base">
                      View all tasks
                    </span>
                  </header>
                  <div className="flex flex-col gap-3 px-3 sm:px-4 py-2">
                    <Card className="border-0 shadow-md p-2 sm:p-3">
                      <div className="flex flex-row justify-between items-center">
                        <span className="text-[#171717] text-sm sm:text-base">
                          Create the new onboard...
                        </span>
                        <div className="flex gap-2">
                          <span className="text-[#4069D0] text-xs sm:text-sm">
                            Mark Completed
                          </span>
                          <span className="text-[#4069D0] text-xs sm:text-sm">
                            Comment
                          </span>
                        </div>
                      </div>
                    </Card>
                    <Card className="border-0 shadow-md p-2 sm:p-3">
                      <span className="text-[#171717] text-sm sm:text-base">
                        Add new employee
                      </span>
                    </Card>
                    <Card className="border-0 shadow-md p-2 sm:p-3">
                      <span className="text-[#171717] text-sm sm:text-base">
                        Create new designs
                      </span>
                    </Card>
                  </div>
                </Card>
              </div>
            </div>
            {/* Attendance Snapshot */}
            <div>
              <span className="font-semibold text-sm sm:text-base text-[#545454] mb-2">
                Your attendance snapshot - January
              </span>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
                <Card className="border-[#99E7FF] bg-[#E5F9FF] p-4 sm:p-5 w-full sm:w-[400px] 2xl:w-[450px]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="flex flex-row items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base 2xl:text-lg">
                        Punctuality Performance
                      </h3>
                      <Info color="black" size={10} className="sm:h-4 sm:w-4" />
                    </span>
                    <span className="text-lg sm:text-[22px] 2xl:text-2xl font-semibold">
                      91%
                    </span>
                  </div>
                  <hr className="border-t-2 border-[#BCEFFF] my-2 sm:my-3" />
                  <div className="flex flex-row gap-3">
                    <div className="flex-1 flex flex-col bg-[#CCF3FF] p-4 sm:p-5 rounded-2xl">
                      <span className="text-xs sm:text-sm text-[#545454]">
                        Days Punctual
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#545454]">
                        21 Days
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col bg-[#CCF3FF] p-4 sm:p-5 rounded-2xl">
                      <span className="text-xs sm:text-sm text-[#545454]">
                        Days Late
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#545454]">
                        0 Day
                      </span>
                    </div>
                  </div>
                </Card>
                <Card className="border-[#F8B636] bg-[#FEF6E6] p-4 sm:p-5 w-full sm:w-[400px] 2xl:w-[450px]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="flex flex-row items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base 2xl:text-lg">
                        Attendance Performance
                      </h3>
                      <Info color="black" size={10} className="sm:h-4 sm:w-4" />
                    </span>
                    <span className="text-lg sm:text-[22px] 2xl:text-2xl font-semibold">
                      91%
                    </span>
                  </div>
                  <hr className="border-t-2 border-[#FCDC9C] my-2 sm:my-3" />
                  <div className="flex flex-row gap-3">
                    <div className="flex-1 flex flex-col bg-[#FDEDCE] p-4 sm:p-5 rounded-2xl">
                      <span className="text-xs sm:text-sm text-[#545454]">
                        Days Punctual
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#545454]">
                        21 Days
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col bg-[#FDEDCE] p-4 sm:p-5 rounded-2xl">
                      <span className="text-xs sm:text-sm text-[#545454]">
                        Days Late
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#545454]">
                        0 Day
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* Timeoff Section */}
            <Card className="shadow-md border-0 mt-4 sm:mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-gray-800">
                    Timeoff
                  </h1>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                      disabled={totalSlides <= 1}
                    >
                      <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                      disabled={totalSlides <= 1}
                    >
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4 sm:mb-6">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full sm:w-64 px-3 sm:px-4 py-2 sm:py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-medium text-sm sm:text-base">
                      Request Other Timeoffs
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {dropdownOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setDropdownOpen(false)}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }, (_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                          {timeoffData
                            .slice(
                              slideIndex * itemsPerSlide["2xl"],
                              (slideIndex + 1) * itemsPerSlide["2xl"]
                            )
                            .map((item, index) => (
                              <div
                                key={`${slideIndex}-${index}`}
                                className="relative"
                              >
                                <div
                                  className={`${item.color} flex flex-col justify-center rounded-2xl p-4 sm:p-6 text-center shadow-md h-[220px] sm:h-[261.26px]`}
                                >
                                  <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-800 mb-4">
                                    {item.type}
                                  </h3>
                                  <SVGComponent
                                    strokeW={16}
                                    className="sm:stroke-[20]"
                                  />
                                  <div className="relative z-10">
                                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                      {item.days}
                                    </div>
                                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                                      Days
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500 mt-2">
                                      Available
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column */}
          <div className="flex flex-col flex-1 xl:basis-1/3">
            {/* Celebrations */}
            <Card className="border-0 shadow-md">
              <header className="px-3 sm:px-4 py-2 sm:py-3">
                <h3 className="text-[#171717] font-semibold text-sm sm:text-base 2xl:text-lg">
                  Celebrations
                </h3>
              </header>
              <Tabs defaultValue="birthdays" className="w-full">
                <TabsList className="flex justify-start rounded-2xl bg-gray-100 p-1 shadow-sm mx-3 sm:mx-4">
                  <TabsTrigger
                    value="birthdays"
                    className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
                  >
                    Birthdays
                  </TabsTrigger>
                  <TabsTrigger
                    value="job"
                    className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
                  >
                    Job Anniversary
                  </TabsTrigger>
                  <TabsTrigger
                    value="newhire"
                    className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
                  >
                    New Hire
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="birthdays" className="px-3 sm:px-4 py-2">
                  <header className="bg-white py-2 h-10 shadow-sm">
                    <span className="text-sm sm:text-base text-[#878787] font-semibold">
                      Today
                    </span>
                  </header>
                  <div className="h-[183px] overflow-y-auto">
                    <div className="flex flex-col gap-4">
                      {employees.map((emp) => (
                        <Card
                          key={emp.id}
                          className="rounded-md shadow-sm border-0 hover:shadow-md bg-[#EBEFFA] p-2 sm:p-3"
                        >
                          <div className="flex flex-row justify-between items-center">
                            <img
                              src={emp.image}
                              alt={emp.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                            />
                            <div className="flex flex-col items-start ml-2">
                              <h3 className="font-semibold text-sm sm:text-base">
                                {emp.name}
                              </h3>
                              <p className="text-[10px] sm:text-xs text-gray-500">
                                {emp.role}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                              <Cake className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                              <span className="text-[13px]">
                                {emp.birthday}
                              </span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <footer className="bg-white py-2 h-10 shadow-sm">
                    <span className="text-sm sm:text-base text-[#878787] font-semibold">
                      Upcoming Birthdays
                    </span>
                  </footer>
                </TabsContent>
                <TabsContent value="job" className="p-3 sm:p-4">
                  💼 Job Anniversaries will show here
                </TabsContent>
                <TabsContent value="newhire" className="p-3 sm:p-4">
                  👋 New Hires will show here
                </TabsContent>
              </Tabs>
            </Card>
            {/* Timeoff Record */}
            <Card className="border-0 shadow-md mt-4 sm:mt-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg 2xl:text-xl font-semibold text-gray-900">
                    Timeoff Record
                  </CardTitle>
                  <Button
                    variant="link"
                    className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium text-sm sm:text-base"
                  >
                    View All Record
                  </Button>
                </div>
                <Tabs defaultValue="upcoming" className="py-2 sm:py-3 w-full">
                  <TabsList className="flex justify-start rounded-2xl bg-gray-100 p-1 shadow-sm">
                    <TabsTrigger
                      value="upcoming"
                      className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          Upcoming
                        </span>
                        {getStatusBadge("upcoming")}
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="ongoing"
                      className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black data-[state=inactive]:text-gray-500"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          Ongoing
                        </span>
                        {getStatusBadge("ongoing")}
                      </div>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming">
                    <div className="h-[180px] overflow-y-auto">
                      <div className="space-y-4">
                        {timeoffRecords
                          .filter((record) => record.status === "upcoming")
                          .map((record) => (
                            <div
                              key={record.id}
                              className="flex flex-col p-2 sm:p-3 bg-orange-50 rounded-lg border border-orange-100"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                                    <AvatarImage
                                      src={record.avatar}
                                      alt={record.name}
                                    />
                                    <AvatarFallback className="bg-gray-200 text-gray-600 text-xs sm:text-sm">
                                      {record.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex flex-col">
                                    <span className="font-medium text-gray-900 text-sm sm:text-base">
                                      {record.name}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500">
                                      {record.role}
                                    </span>
                                  </div>
                                </div>
                                <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-200 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                  {record.days} Days
                                </Badge>
                              </div>
                              <hr className="border-t border-[#FCDC9C] my-2" />
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>Start Date: {record.startDate}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>End Date: {record.endDate}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="ongoing">
                    <div className="space-y-4">
                      {timeoffRecords
                        .filter((record) => record.status === "ongoing")
                        .map((record) => (
                          <div
                            key={record.id}
                            className="flex flex-col p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-100"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                                  <AvatarImage
                                    src={record.avatar}
                                    alt={record.name}
                                  />
                                  <AvatarFallback className="bg-gray-200 text-gray-600 text-xs sm:text-sm">
                                    {record.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                                    {record.name}
                                  </span>
                                  <span className="text-xs sm:text-sm text-gray-500">
                                    {record.role}
                                  </span>
                                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-1 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                      <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
                                      <span>
                                        Start Date: {record.startDate}
                                      </span>
                                    </div>
                                    <div className="border-l border-[#878787] h-0 sm:h-5 hidden sm:block"></div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                      <span>End Date: {record.endDate}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-200 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                {record.days} Days
                              </Badge>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
