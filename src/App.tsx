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

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(timeoffData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev: number) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev: number) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return timeoffData.slice(start, start + itemsPerSlide);
  };

  const dropdownOptions = [
    "Maternity/Paternity Leave",
    "Study Leave",
    "Sabbatical",
    "Bereavement Leave",
    "Jury Duty",
  ];

  const getStatusBadge = (status: string) => {
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
    <div className="min-h-screen flex flex-col bg-gray-50 min-w-full">
      <header className="min-w-full">
        <Navbar />
        {/* Main Navigation */}
        <div className="h-0.5 px-40 border-[#E1E1E1] mx-4"></div>
        <MainNav />
      </header>
      <div className="pr-[80px] pl-[80px]">
        <WelcomeHeader />
        <main className="flex flex-row w-full gap-3">
          <div className="flex flex-col basis-2/3 ">
            {/* Timer Row and Tasks row */}
            <div className="flex flex-row gap-6 h-75 mb-3">
              {/* Attendance timer */}
              <div className="flex flex-col h-[40px] ">
                <Card className="bg-[#5B7ED7] w-[400px] border-[#5B7ED7] text-white px-5 py-5">
                  <div className="">
                    <span className="text-sm">Attendance</span>
                    <span></span>
                  </div>
                  <div className="text-xl font-semibold">Wed 17, Jul 2023</div>
                  <div className="flex flex-row justify-between">
                    <Tabs defaultValue="remote" className="py-3">
                      <TabsList className="bg-white mt-4 my-2">
                        <TabsTrigger
                          value="remote"
                          className="px-4 py-2 text-sm font-medium rounded-l
                     data-[state=active]:bg-black data-[state=active]:text-white
                     data-[state=inactive]:bg-white data-[state=inactive]:text-black"
                        >
                          Remote
                        </TabsTrigger>
                        <TabsTrigger
                          value="on-site"
                          className="px-4 py-2 text-sm font-medium  rounded-r
                     data-[state=active]:bg-black data-[state=active]:text-white
                     data-[state=inactive]:bg-white data-[state=inactive]:text-black"
                        >
                          On-Site
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="remote"></TabsContent>
                      <TabsContent value="on-site"></TabsContent>
                    </Tabs>
                    <div className="flex flex-col">
                      <span>Status</span>
                      {/* tag */}
                      <span className="flex flex-col items-center bg-white text-black w-24 text-center rounded-full px-2 py-1 text-sm font-medium">
                        Punctual
                      </span>
                      {/* tag */}
                    </div>
                  </div>
                </Card>
                <Card className="flex bg-[#EBEFFA] w-[395px] border-[#EBEFFA] rounded-lg self-center border-t-0 border-l-0 border-r-0">
                  {/* Timer */}
                  <div className="flex flex-row items-center gap-2 py-3 font-bold px-2">
                    <span className="bg-gray-100 rounded-lg shadow-md  py-2 px-3">
                      0
                    </span>
                    <span className="bg-gray-100 rounded-lg shadow-md  py-2 px-3">
                      8
                    </span>
                    <span className="">:</span>
                    <span className="bg-gray-100 rounded-lg shadow-md  py-2 px-3">
                      3
                    </span>
                    <span className="bg-gray-100 rounded-lg shadow-md  py-2 px-3">
                      0
                    </span>
                  </div>
                  <div className="flex items-center border-l border-gray-300 h-full"></div>
                  <div className="flex flex-col items-center text-sm text-gray-600 font-normal px-5 py-2 h-full">
                    <p className="text-sm font-normal">
                      Last Clock-in Time & Date:
                    </p>
                    <p className="text-sm font-semibold">
                      08:00 AM (18 Nov, 2024)
                    </p>
                  </div>
                </Card>
                <Button className="mt-5 bg-[#5B7ED7] text-white">
                  Clock In
                </Button>
              </div>
              {/* Attendance timer */}

              {/* Tasks */}
              <div className="flex w-[402px] ">
                <Card className="w-full bg-white border-0 shadow-md">
                  <div className="flex flex-col">
                    <header className="flex flex-row justify-between px-4 py-3  h-10 items-center">
                      <div className="flex flex-row gap-2 items-center">
                        <BookText color="#E61C5C" size={20} />
                        <h3 className="font-semibold text-[#545454]">Tasks</h3>
                        {/* notification badge */}
                        <span className="bg-[#E61C5C] text-white text-xs px-2 py-0.5 rounded-full">
                          5
                        </span>
                        {/* notification badge */}
                      </div>
                      <div>
                        <span className="font-semibold text-[#545454] text-base">
                          View all tasks
                        </span>
                      </div>
                    </header>
                    <main>
                      <div className="flex flex-col gap-3 px-4 py-2">
                        <Card className="mb-2 border-0 shadow-md py-3 px-2">
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-[#171717]">
                              Create the new onboard...
                            </span>
                            <span className="text-[#4069D0] text-xs">
                              Mark Completed
                            </span>
                            <span className="text-[#4069D0] text-xs">
                              Comment
                            </span>
                          </div>
                        </Card>
                        <Card className="mb-2 border-0 shadow-md py-3 px-2">
                          <span className="text-[#171717]">
                            Add new employee
                          </span>
                        </Card>
                        <Card className="mb-2 border-0 shadow-md py-3 px-2">
                          <span className="text-[#171717]">
                            Create new designs
                          </span>
                        </Card>
                      </div>
                    </main>
                  </div>
                </Card>
              </div>
              {/* Tasks */}
            </div>
            <div>
              <span className="font-semibold text-base text-[#545454] mb-2">
                Your attendance snapshot - January
              </span>
              <div className="flex flex-row items-center h-[143px] gap-6 mt-10">
                {/* Attendance snapshot */}
                <div className="w-[400px]">
                  <Card className=" mt-3 border-[#99E7FF] bg-[#E5F9FF] px-5 py-5">
                    <div>
                      <div className="flex flex-row w-full justify-between items-center">
                        <span className="flex flex-row items-center justify-between h-4">
                          <h3 className="font-semibold text-base mr-3">
                            Punctuality Performance
                          </h3>
                          <Info color="black" size={10} />
                        </span>
                        <span className="text-[22px] font-semibold">91%</span>
                      </div>
                    </div>
                    {/* Horizontal line */}
                    <hr className="border-t-2 border-[#BCEFFF]" />
                    <div className="flex flex-row gap-3 mt-3">
                      <div className="flex flex-1 flex-col bg-[#CCF3FF] px-5 py-8 rounded-2xl border-[0.85]">
                        <span className="text-xs text-[#545454]">
                          Days Punctual
                        </span>
                        <span className="font-semibold text-base text-[#545454]">
                          21 Days
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col bg-[#CCF3FF] px-5 py-8 rounded-2xl border-[0.85]">
                        <span className="text-xs text-[#545454]">
                          Days Late
                        </span>
                        <span className="font-semibold text-[#545454] text-base">
                          0 Day
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                {/* Attendance snapshot */}

                {/* Attendance Performance */}
                <div className="w-[400px]">
                  <Card className=" mt-3 border-[#F8B636] bg-[#FEF6E6] px-5 py-5">
                    <div>
                      <div className="flex flex-row w-full justify-between items-center">
                        <span className="flex flex-row items-center justify-between h-4">
                          <h3 className="font-semibold text-base mr-3">
                            Attendance Performance
                          </h3>
                          <Info color="black" size={10} />
                        </span>
                        <span className="text-[22px] font-semibold">91%</span>
                      </div>
                    </div>
                    {/* Horizontal line */}
                    <hr className="border-t-2 border-[#FCDC9C]" />
                    <div className="flex flex-row gap-3 mt-3">
                      <div className="flex flex-1 flex-col bg-[#FDEDCE] px-5 py-8 rounded-2xl border-[0.85]">
                        <span className="text-xs text-[#545454]">
                          Days Punctual
                        </span>
                        <span className="font-semibold text-base text-[#545454]">
                          21 Days
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col bg-[#FDEDCE] px-5 py-8 rounded-2xl border-[0.85]">
                        <span className="text-xs text-[#545454]">
                          Days Late
                        </span>
                        <span className="font-semibold text-[#545454] text-base">
                          0 Day
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                {/* Attendance Performance */}
              </div>
            </div>
            <div className="mt-15">
              {/* */}

              <Card className="shadow-timeoff border-0">
                <CardHeader className="">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Timeoff
                    </h1>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2  bg-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                        disabled={totalSlides <= 1}
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 bg-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                        disabled={totalSlides <= 1}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Dropdown */}
                  <div className="relative mb-6">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center justify-between w-64 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="font-medium">
                        Request Other Timeoffs
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {dropdownOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setDropdownOpen(false);
                              // Handle option selection here
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Sliding Cards */}
                  <div className="relative overflow-hidden mb-20">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {Array.from({ length: totalSlides }, (_, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {timeoffData
                              .slice(
                                slideIndex * itemsPerSlide,
                                (slideIndex + 1) * itemsPerSlide
                              )
                              .map((item, index) => (
                                <div
                                  key={`${slideIndex}-${index}`}
                                  className="relative"
                                >
                                  <div
                                    className={`${item.color} flex flex-col justify-center self-center rounded-2xl p-8 mb-5 text-center relative overflow-hidden shadow-md h-[261.26px]`}
                                  >
                                    {/* Background circular decoration */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-32 h-32 rounded-full border-4 border-white border-opacity-30"></div>
                                    </div> */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                      {item.type}
                                    </h3>
                                    <SVGComponent strokeW={20} />
                                    {/* Content */}
                                    <div className="relative z-10">
                                      <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {item.days}
                                      </div>
                                      <div className="text-gray-600 font-medium">
                                        Days
                                      </div>
                                      <div className="text-sm text-gray-500 mt-2">
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
          </div>
          {/*  */}
          {/* Second col: Celebration && Timeoff Records */}
          <div className="flex flex-1 flex-col ">
            {/* Celebration */}
            <div className="">
              <Card className="border-0  w-full  py-1 shadow-md ">
                <header>
                  <h3 className=" text-[#171717] font-semibold text-base px-4 py-3">
                    Celebrations
                  </h3>
                </header>
                <div className="w-full max-w-md">
                  {/* Tabs */}
                  <Tabs defaultValue="birthdays" className="w-full">
                    <TabsList className="flex w-full justify-start rounded-2xl bg-gray-100 p-1 shadow-sm">
                      <TabsTrigger
                        value="birthdays"
                        className="rounded-full px-4 py-2 text-sm font-medium
                       data-[state=active]:bg-white data-[state=active]:shadow
                       data-[state=active]:text-black data-[state=inactive]:text-gray-500
                       transition-all"
                      >
                        Birthdays
                      </TabsTrigger>

                      <TabsTrigger
                        value="job"
                        className="rounded-full px-4 py-2 text-sm font-medium
                       data-[state=active]:bg-white data-[state=active]:shadow
                       data-[state=active]:text-black data-[state=inactive]:text-gray-500
                       transition-all"
                      >
                        Job Anniversary
                      </TabsTrigger>

                      <TabsTrigger
                        value="newhire"
                        className="rounded-full px-4 py-2 text-sm font-medium
                       data-[state=active]:bg-white data-[state=active]:shadow
                       data-[state=active]:text-black data-[state=inactive]:text-gray-500
                       transition-all"
                      >
                        New Hire
                      </TabsTrigger>
                    </TabsList>

                    {/* Tab Content Sections */}
                    <TabsContent value="birthdays" className="py-2 px-4">
                      <header className="bg-white py-2 h-10 shad-md">
                        <span className="text-base  text-[#878787] font-semibold  ">
                          Today
                        </span>
                      </header>
                      <main className="h-[183px] overflow-y-scroll w-full">
                        {/* 3 column Card with employee image with fully rounded border, Employee name and role, and birthday cake icon and birthday at the bottom e.g. Jan 23  */}
                        <div className="flex flex-wrap gap-6">
                          {employees.map((emp) => (
                            <Card
                              key={emp.id}
                              className="basis-[300px] max-w-sm rounded-md shadow-sm border-0 hover:shadow-md transition bg-[#EBEFFA]"
                            >
                              <CardContent className="flex flex-row justify-between items-center px-3 py-2">
                                {/* Profile Image */}
                                <img
                                  src={emp.image}
                                  alt={emp.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />

                                {/* Name & Role */}
                                <div className="flex flex-col items-start ml-2">
                                  <h3 className="font-semibold text-sm leading-tight">
                                    {emp.name}
                                  </h3>
                                  <p className="text-[10px] text-gray-500 leading-tight">
                                    {emp.role}
                                  </p>
                                </div>

                                {/* Birthday */}
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                  <Cake className="w-4 h-4 text-pink-500" />
                                  <span className="text-[13px]">
                                    {emp.birthday}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </main>
                      <footer className="bg-white py-2 h-10 shad-md">
                        <span className="text-base  text-[#878787] font-semibold">
                          Upcoming Birthdays
                        </span>
                      </footer>
                    </TabsContent>
                    <TabsContent value="job" className="p-4">
                      💼 Job Anniversaries will show here
                    </TabsContent>
                    <TabsContent value="newhire" className="p-4">
                      👋 New Hires will show here
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
            </div>
            {/* Celebration */}
            {/* Timeoff */}
            <div className="w-full max-w-md mx-auto mt-10">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      Timeoff Record
                    </CardTitle>
                    <Button
                      variant="link"
                      className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium"
                    >
                      View All Record
                    </Button>
                  </div>

                  {/* Tabs */}
                  <Tabs defaultValue="upcoming" className="py-3 w-full">
                    <TabsList className="flex justify-start rounded-2xl bg-gray-100 p-1 shadow-sm w-full">
                      <TabsTrigger
                        value="upcoming"
                        className="rounded-full px-4 py-2 text-sm font-medium
              data-[state=active]:bg-white data-[state=active]:shadow
              data-[state=active]:text-black
              transition-all"
                      >
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg flex-1">
                          <span className="text-sm font-medium text-gray-700">
                            Upcoming
                          </span>
                          {getStatusBadge("upcoming")}
                        </div>
                      </TabsTrigger>

                      <TabsTrigger
                        value="ongoing"
                        className="rounded-full px-4 py-2 text-sm font-medium
              data-[state=active]:bg-white data-[state=active]:shadow
              data-[state=active]:text-black data-[state=inactive]:text-gray-500
              transition-all"
                      >
                        <div className="flex items-center gap-2 rounded-lg flex-1">
                          <span className="text-sm font-medium text-gray-700">
                            Ongoing
                          </span>
                          {getStatusBadge("ongoing")}
                        </div>
                      </TabsTrigger>
                    </TabsList>

                    {/* First Tab Content (Upcoming Records) */}
                    <TabsContent value="upcoming">
                      <div className="overflow-y-scroll h-[180px]">
                        <div className="space-y-4">
                          {timeoffRecords
                            .filter((record) => record.status === "upcoming")
                            .map((record) => (
                              <div
                                key={record.id}
                                className="flex flex-col p-3 bg-orange-50 rounded-lg border border-orange-100"
                              >
                                {/* Top row: Avatar + Name + Days */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage
                                        src={record.avatar}
                                        alt={record.name}
                                      />
                                      <AvatarFallback className="bg-gray-200 text-gray-600">
                                        {record.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col">
                                      <span className="font-medium text-gray-900 text-sm">
                                        {record.name}
                                      </span>
                                      <span className="text-xs text-gray-500">
                                        {record.role}
                                      </span>
                                    </div>
                                  </div>

                                  <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-200 text-xs px-2 py-1 rounded-full">
                                    {record.days} Days
                                  </Badge>
                                </div>

                                {/* Divider + Dates */}
                                <hr className="border-t border-[#FCDC9C] my-2" />
                                <div className="flex items-center gap-4 text-xs text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <CalendarDays className="h-3 w-3" />
                                    <span>Start Date: {record.startDate}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>End Date: {record.endDate}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </TabsContent>

                    {/* Second Tab Content (Ongoing Records) */}
                    <TabsContent value="ongoing">
                      <div className="space-y-4">
                        {timeoffRecords
                          .filter((record) => record.status === "ongoing")
                          .map((record) => (
                            <div
                              key={record.id}
                              className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100"
                            >
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage
                                    src={record.avatar}
                                    alt={record.name}
                                  />
                                  <AvatarFallback className="bg-gray-200 text-gray-600">
                                    {record.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                  <span className="font-medium text-gray-900 text-sm">
                                    {record.name}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {record.role}
                                  </span>

                                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-600">
                                    <div className="flex items-center gap-1">
                                      <CalendarDays className="h-3 w-3" />
                                      <span>
                                        Start Date: {record.startDate}
                                      </span>
                                    </div>
                                    <div className="border-l border-[#878787] h-5"></div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>End Date: {record.endDate}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-200 text-xs px-2 py-1">
                                  {record.days} Days
                                </Badge>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </div>

            {/* Timeoff */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
