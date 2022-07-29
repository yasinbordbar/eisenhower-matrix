import { ReactNode } from "react";

export const enum TaskStatus {
  UrgentImportant = "urgent-important",
  NotUrgentImportant = "urgent-important",
  UrgentNotImportant = "urgent-not-important",
  NotUrgentNotImportant = "not-urgent-important",
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

export interface ITask {
  title: string;
  id: string;
  getTasks: () => void;
  status?: TaskStatus;
}

export interface ICustomRow {
  children: ReactNode;
}

export interface IQuadrant {
  type: any;
  count: number;
}

export interface IAddButton {
  status?: any;
  getTasks?: () => void;
}

export interface ICustomForm {
  status: TaskStatus | undefined;
  getTasks: (() => void) | undefined;
  setIsModalVisible?: any;
  taskDetails?: any;
}
