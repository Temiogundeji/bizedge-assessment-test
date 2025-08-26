import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BreakTimeModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  currentStatus: any;
  today: string;
  isStartBreak?: boolean;
}

export default function BreakTimeModal({
  open,
  onClose,
  onConfirm,
  currentStatus,
  today,
  isStartBreak = true,
}: BreakTimeModalProps) {
  const actionText = isStartBreak ? "Take a Break" : "End Break";
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
            Confirm {actionText}
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
            {actionText} at {currentTime}
          </p>
          <p className="text-xs">
            {currentStatus?.location}{" "}
            {new Date(today).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={onConfirm}
            className="bg-[#2898A4] hover:bg-teal-700 text-white w-full"
          >
            Yes, {actionText}
          </Button>
          <Button
            variant="secondary"
            className="bg-teal-50 text-[#2898A4] hover:bg-teal-100 w-full"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
