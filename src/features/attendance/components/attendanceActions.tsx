import { Button } from "@/components/ui/button";

interface AttendanceActionsProps {
  isClockedIn: boolean;
  isStartBreak: boolean;
  onClockIn: () => void;
  onClockOut: () => void;
  onStartBreak: () => void;
}

export default function AttendanceActions({
  isClockedIn,
  onClockIn,
  onClockOut,
  onStartBreak,
  isStartBreak,
}: AttendanceActionsProps) {
  if (!isClockedIn) {
    return (
      <Button
        onClick={onClockIn}
        className="mt-4 w-full bg-[#5B7ED7] text-white"
      >
        Clock In
      </Button>
    );
  }

  return (
    <div
      className={`flex ${
        isStartBreak ? "flex-col" : "flex-row"
      } gap-3 mt-3 w-full`}
    >
      <Button
        onClick={onClockOut}
        className={`bg-[#4F75E5] text-white px-6 py-2 rounded-md ${
          isStartBreak === true ? "w-full" : "flex-2"
        }`}
      >
        Clock Out
      </Button>
      <Button
        onClick={onStartBreak}
        className={`bg-[#F5A623] text-black px-6 py-2 rounded-md ${
          isStartBreak === true ? "w-full" : "flex-1"
        }`}
      >
        Take Break
      </Button>
    </div>
  );
}
