//! Array of all users
import API from "./API";
import { ITasksCount, ITask } from "../interfaces";

export const getTasksByStatusService = (status: any) => {
  return API.get<ITask[]>(`/tasks/type/${status}`);
};

export const getTaskByIdService = (taskId: string) => {
  return API.get<ITask>(`/tasks/${taskId}`);
};

export const createTaskService = (newTask: ITask) => {
  return API.post<ITask>(`/tasks`, newTask);
};

export const updateTaskService = (taskId: string, updateTask: ITask) => {
  return API.patch<ITask>(`/tasks/${taskId}`, updateTask);
};

export const deleteTaskService = (taskId: string) => {
  return API.delete<ITask>(`/tasks/${taskId}`);
};

export const getTasksCounterService = () => {
  return API.get<ITasksCount>(`/tasks/counts`);
};
