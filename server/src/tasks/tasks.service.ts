import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  // getTaskByStatus(status: TaskStatus) {
  //   return this.tasks.filter(
  //     (task) => task.status.toLowerCase() === status.toLowerCase(),
  //   );
  // }

  getTaskByType(status: string) {
    const isImportant =
      status === 'not-urgent-important' || status === 'urgent-important'
        ? true
        : false;

    const isUrgent =
      status === 'urgent-important' || status === 'urgent-not-important'
        ? true
        : false;

    return this.tasks.filter(
      (task) => task.isImportant === isImportant && task.isUrgent === isUrgent,
    );
  }

  getTask(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    return found;
  }

  deleteTask(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description, isImportant, isUrgent } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      isImportant,
      isUrgent,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(createTaskDto: CreateTaskDto, id: string): Task {
    const objIndex = this.tasks.findIndex((obj) => obj.id === id);

    const { title, description, isImportant, isUrgent } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      isImportant,
      isUrgent,
      status: TaskStatus.OPEN,
    };

    this.tasks[objIndex] = task;

    return task;
  }
}
