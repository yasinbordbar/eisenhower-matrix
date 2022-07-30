export interface Task {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  isUrgent: boolean;
  status: TaskStatus;
}

export interface TasksCount {
  urgentImportantCount: number;
  notUrgentImportantCount: number;
  urgentNotImportantCount: number;
  notUrgentNotImportantCount: number;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = ' IN_PROGRESS',
  DONE = 'DONE',
}
