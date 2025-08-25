import type Employee from "./employee";

export interface Birthday {
  id: string;
  employee: Employee;
  date: string;
}

export interface Anniversary {
  id: string;
  employee: Employee;
  date: string;
  years: number;
}
