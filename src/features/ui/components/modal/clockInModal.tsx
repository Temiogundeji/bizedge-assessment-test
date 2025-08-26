import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ClockInModal({
  open,
  onClose,
  onConfirm,
  currentStatus,
  today,
}: any) {
  return (
    <Dialog open={open} onOpenChange={(open) => (open ? null : onClose())}>
      <DialogContent className="bg-white max-w-sm rounded-2xl p-6 text-center">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-gray-600 font-medium text-base">
            Confirm Clock In
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mb-4">
          <img
            src="https://placehold.co/600x400"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <p className="text-lg font-semibold text-gray-900">
          Clock In at {new Date().toLocaleTimeString()}
        </p>
        <p className="text-sm text-gray-500">
          {currentStatus.location} • {today}
        </p>
        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClick={onConfirm}
            className="bg-[#2898A4] text-white w-full"
          >
            Yes, Clock In
          </Button>
          <Button variant="secondary" onClick={onClose} className="w-full">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
