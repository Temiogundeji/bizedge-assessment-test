import { Card } from "../../../components/ui/card";
import { Info } from "lucide-react";

function AttendanceSnapshot({
  punctuality = {
    percentage: "91%",
    daysPunctual: "21 Days",
    daysLate: "0 Day",
  },
  attendance = {
    percentage: "91%",
    daysPunctual: "21 Days",
    daysLate: "0 Day",
  },
}) {
  return (
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
              {punctuality.percentage}
            </span>
          </div>
          <hr className="border-t-2 border-[#BCEFFF] my-2 sm:my-3" />
          <div className="flex flex-row gap-3">
            <div className="flex-1 flex flex-col bg-[#CCF3FF] p-4 sm:p-5 rounded-2xl">
              <span className="text-xs sm:text-sm text-[#545454]">
                Days Punctual
              </span>
              <span className="font-semibold text-sm sm:text-base text-[#545454]">
                {punctuality.daysPunctual}
              </span>
            </div>
            <div className="flex-1 flex flex-col bg-[#CCF3FF] p-4 sm:p-5 rounded-2xl">
              <span className="text-xs sm:text-sm text-[#545454]">
                Days Late
              </span>
              <span className="font-semibold text-sm sm:text-base text-[#545454]">
                {punctuality.daysLate}
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
              {attendance.percentage}
            </span>
          </div>
          <hr className="border-t-2 border-[#FCDC9C] my-2 sm:my-3" />
          <div className="flex flex-row gap-3">
            <div className="flex-1 flex flex-col bg-[#FDEDCE] p-4 sm:p-5 rounded-2xl">
              <span className="text-xs sm:text-sm text-[#545454]">
                Days Punctual
              </span>
              <span className="font-semibold text-sm sm:text-base text-[#545454]">
                {attendance.daysPunctual}
              </span>
            </div>
            <div className="flex-1 flex flex-col bg-[#FDEDCE] p-4 sm:p-5 rounded-2xl">
              <span className="text-xs sm:text-sm text-[#545454]">
                Days Late
              </span>
              <span className="font-semibold text-sm sm:text-base text-[#545454]">
                {attendance.daysLate}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AttendanceSnapshot;
