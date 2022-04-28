export const enum TaskStatus {
  UrgentImportant = "Urgent-Important",
  NotUrgentImportant = "NotUrgent-Important",
  UrgentNotImportant = "Urgent-NotImportant",
  NotUrgentNotImportant = "NotUrgent-NotImportant",
}

export type Task = {
  id: number | string;
  title: string;
  status: TaskStatus;
};
