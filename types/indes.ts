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

export interface Values {
  title: string;
  description: string;
  isImportant: boolean;
  isUrgent: boolean;
}

// export interface IType {
//   url: string;
//   title: string;
//   counter: number;
//   counterColor: string;
//   description: string;
// }
