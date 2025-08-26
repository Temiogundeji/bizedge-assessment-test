import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AttendanceHeaderProps {
  today: string;
  currentStatus: any;
  onLocationChange: (location: string) => void;
}

export default function AttendanceHeader({
  today,
  currentStatus,
  onLocationChange,
}: AttendanceHeaderProps) {
  const getAttendanceStatus = () => {
    if (!currentStatus.isClockedIn) return "-";
    if (currentStatus.onBreak) return "On Break";

    const expectedStartHour = 9;
    const [hours] = currentStatus.lastClockIn?.split(":") || ["0"];
    return parseInt(hours) <= expectedStartHour ? "Punctual" : "Late";
  };

  return (
    <Card className="bg-[#5B7ED7] text-white p-4 sm:p-5 border-0">
      <div className="flex flex-col gap-2">
        <span className="text-sm sm:text-base">Attendance</span>
        <div className="text-lg sm:text-xl 2xl:text-2xl font-semibold">
          {today}
        </div>
        <div className="flex flex-row justify-between items-center">
          <Tabs
            onValueChange={onLocationChange}
            defaultValue="remote"
            className="py-2 sm:py-3"
          >
            <TabsList className="bg-white mt-2 sm:mt-4 py-2">
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
  );
}
