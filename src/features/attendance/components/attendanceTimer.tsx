import { Card } from "../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";

function AttendanceTimer({
  date = "Wed 17, Jul 2023",
  clockInTime = "08:00 AM (18 Nov, 2024)",
}) {
  return (
    <div className="flex flex-col w-full sm:w-[400px] 2xl:w-[450px]">
      <Card className="bg-[#5B7ED7] border-[#5B7ED7] text-white p-4 sm:p-5">
        <div className="flex flex-col gap-2">
          <span className="text-sm sm:text-base">Attendance</span>
          <div className="text-lg sm:text-xl 2xl:text-2xl font-semibold">
            {date}
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
            <p className="font-semibold">{clockInTime}</p>
          </div>
        </div>
      </Card>
      <Button className="mt-4 bg-[#5B7ED7] text-white w-full py-2 sm:py-3 text-sm sm:text-base">
        Clock In
      </Button>
    </div>
  );
}

export default AttendanceTimer;
