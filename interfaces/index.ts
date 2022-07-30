export interface ITask {
  id: number | string;
  title: string;
  description: string;
  isImportant: boolean;
  isUrgent: boolean;
  status: TaskStatus;
}

export const enum TaskStatus {
  UrgentImportant = "urgent-important",
  NotUrgentImportant = "urgent-important",
  UrgentNotImportant = "urgent-not-important",
  NotUrgentNotImportant = "not-urgent-important",
}

export interface ITasksCount {
  urgentImportantCount: number;
  notUrgentImportantCount: number;
  urgentNotImportantCount: number;
  notUrgentNotImportantCount: number;
}
