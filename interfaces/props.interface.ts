import { ReactNode } from "react";
import { TaskStatus } from "./index";

export interface ITaskProps {
  title: string;
  id: string;
  getTasks: () => void;
  status?: TaskStatus;
}

export interface ICustomRowProps {
  children: ReactNode;
}

export interface IQuadrantProps {
  type: any;
  count: number;
}

export interface IAddButtonProps {
  status?: any;
  getTasks?: () => void;
  getNumberOfTasks?: () => void;
}

export interface ICustomFormProps {
  status: TaskStatus | undefined;
  getTasks: (() => void) | undefined;
  getNumberOfTasks?: () => void;
  setIsModalVisible?: any;
  taskDetails?: any;
}
