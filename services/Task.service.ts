//! Array of all users
import API from "./API";
import { Task } from "../types";

export const getTasksByStatusService = (status: any) => {
  return API.get<any>(`/tasks/type/${status}`);
};

export const getTaskByIdService = (taskId: string) => {
  return API.get<any>(`/tasks/${taskId}`);
};

export const createTaskService = (newTask: Task) => {
  return API.post<any>(`/tasks`, newTask);
};

export const updateTaskService = (taskId: string, updateTask: Task) => {
  return API.patch<any>(`/tasks/${taskId}`, updateTask);
};

export const deleteTaskService = (taskId: string) => {
  return API.delete<any>(`/tasks/${taskId}`);
};

export const getTasksCounterService = () => {
  return API.get<any>(`/tasks/counts`);
};
