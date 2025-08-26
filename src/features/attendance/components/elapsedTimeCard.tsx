import { Card } from "@/components/ui/card";

interface ElapsedTimeCardProps {
  timeDisplay: any;
  lastClockIn: string;
  today: string;
}

export default function ElapsedTimeCard({
  timeDisplay,
  lastClockIn,
}: ElapsedTimeCardProps) {
  return (
    <Card className="bg-[#EBEFFA] rounded-lg mt-4 p-3 border-0">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 font-bold">
          <span className="bg-gray-100 rounded-lg shadow-md py-1.5 px-3 text-xs sm:text-sm">
            {timeDisplay?.h1}
          </span>
          <span className="bg-gray-100 rounded-lg shadow-md py-1.5 px-3 text-xs sm:text-sm">
            {timeDisplay?.h2}
          </span>
          <span className="text-sm sm:text-base">:</span>
          <span className="bg-gray-100 rounded-lg shadow-md py-1.5 px-3 text-xs sm:text-sm">
            {timeDisplay?.m1}
          </span>
          <span className="bg-gray-100 rounded-lg shadow-md py-1.5 px-3 text-xs sm:text-sm">
            {timeDisplay?.m2}
          </span>
        </div>
        <div className="border-l border-gray-300 h-6 sm:h-8"></div>
        <div className="flex flex-col text-xs sm:text-sm text-gray-600 font-normal">
          <p>Last Clock-in Time & Date:</p>
          <p className="font-semibold">{lastClockIn}</p>
        </div>
      </div>
    </Card>
  );
}
