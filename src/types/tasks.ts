export interface Task {
  id: string;
  title: string;
  status: "pending" | "completed" | "in-progress";
  priority: "low" | "medium" | "high";
  dueDate?: string;
}
