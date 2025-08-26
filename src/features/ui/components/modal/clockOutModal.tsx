import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ClockOutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  currentStatus: any;
  today: string;
}

export default function ClockOutModal({
  open,
  onClose,
  onConfirm,
  currentStatus,
  today,
}: ClockOutModalProps) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? null : onClose())}>
      <DialogContent className="bg-white max-w-sm rounded-2xl p-6 text-center">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-gray-600 font-medium text-base">
            Confirm Clock Out
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center mb-4">
          <img
            src="https://placehold.co/600x400"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-900">
            Clock Out at {currentTime}
          </p>
          <p className="text-lg font-semibold text-gray-900">
            on{" "}
            {new Date(today).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
            ?
          </p>
          <p className="text-xs">{currentStatus?.location}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={onConfirm}
            className="bg-[#2898A4] hover:bg-teal-700 text-white w-full"
          >
            Yes, Clock Out
          </Button>
          <Button
            variant="secondary"
            className="bg-teal-50 text-[#2898A4] hover:bg-teal-100 w-full"
            onClick={onClose}
          >
            Use My Current Time
          </Button>
          <Button
            variant="secondary"
            className="bg-white text-[#2898A4] hover:bg-teal-100 w-full border-0 shadow-none"
          >
            Enter a Custom Time
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
