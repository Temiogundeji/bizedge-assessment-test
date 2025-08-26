import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";
import { useAppSelector } from "@/hooks/redux";

function TimeoffRecord() {
  const getStatusCount = (status: "upcoming" | "ongoing") =>
    timeOffRequests.filter((record) => record.status === status).length;
  const timeOffRequests = useAppSelector((state) => state.timeoff.requests);
  return (
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
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="upcoming" className="py-2 sm:py-3 w-full">
          <TabsList className="flex justify-start rounded-2xl bg-gray-100 p-1 shadow-sm">
            <TabsTrigger
              value="upcoming"
              className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium 
                data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Upcoming
                </span>
                <Badge
                  variant="secondary"
                  className="bg-[#FF6666] hover:bg-red-100"
                >
                  {getStatusCount("upcoming")}
                </Badge>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium 
                data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-black 
                data-[state=inactive]:text-gray-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Ongoing
                </span>
                <Badge
                  variant="secondary"
                  className="bg-[#FF6666] hover:bg-red-100"
                >
                  {getStatusCount("ongoing")}
                </Badge>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Upcoming */}
          <TabsContent value="upcoming">
            <div className="h-[180px] overflow-y-auto">
              <div className="space-y-4">
                {timeOffRequests
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
                              alt={record.employeeName}
                            />
                            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs sm:text-sm">
                              {record.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 text-sm sm:text-base">
                              {record.employeeName}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500">
                              {record.position}
                            </span>
                          </div>
                        </div>
                        <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-200 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          {record.days} Days
                        </Badge>
                      </div>
                      <hr className="border-t border-[#FCDC9C] my-2" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <div className="flex flex-row justify-between items-center gap-1 max-w-full">
                          <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="md:text-xs max-w-full">
                            Start Date: {record.startDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="md:text-xs">
                            End Date: {record.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Ongoing */}
          <TabsContent value="ongoing">
            <div className="h-[180px] overflow-y-auto">
              <div className="space-y-4">
                {timeOffRequests
                  .filter((record) => record.status === "ongoing")
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
                              alt={record.employeeName}
                            />
                            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs sm:text-sm">
                              {record.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-900 text-sm sm:text-base">
                              {record.employeeName}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500">
                              {record.position}
                            </span>
                          </div>
                        </div>
                        <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-200 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          {record.days} Days
                        </Badge>
                      </div>
                      <hr className="border-t border-[#FCDC9C] my-2" />
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <div className="flex flex-row justify-between items-center gap-1 max-w-full">
                          <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="md:text-xs max-w-full">
                            Start Date: {record.startDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="md:text-xs">
                            End Date: {record.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default TimeoffRecord;
