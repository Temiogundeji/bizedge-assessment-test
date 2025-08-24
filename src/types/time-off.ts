import type Employee from "./employee";

export interface TimeoffRequest {
  id: string;
  employee: Employee;
  type: "annual" | "sick" | "personal";
  startDate: string;
  endDate: string;
  days: number;
  status: "upcoming" | "ongoing" | "completed";
}

export interface TimeoffBalance {
  annual: number;
  sick: number;
  personal: number;
}
