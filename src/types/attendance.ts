export interface AttendanceRecord {
  id: string;
  date: string;
  clockInTime: string | null;
  clockOutTime: string | null;
  status: "remote" | "on-site";
  punctualityStatus: "punctual" | "late" | "early";
}

export interface AttendanceStats {
  punctualityPercentage: number;
  attendancePercentage: number;
  daysPunctual: number;
  daysLate: number;
  daysPresent: number;
  unauthorizedAbsent: number;
}
