export interface Task {
  id: string;
  title: string;
  status: "pending" | "completed" | "in-progress";
  priority: "low" | "medium" | "high";
  actions: [string, string?]; // Tuple with max 2 strings, second is optional
  dueDate?: string;
}
