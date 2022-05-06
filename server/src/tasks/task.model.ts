export interface Task {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  isUrgent: boolean;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = ' IN_PROGRESS',
  DONE = 'DONE',
}
