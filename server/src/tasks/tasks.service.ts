import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { TasksRepository } from './task.repository';
import { Task } from '../schema/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async getTaskById(taskId: string): Promise<Task> {
    return this.tasksRepository.findOne({ id: taskId });
  }

  async getTasks(): Promise<Task[]> {
    return this.tasksRepository.find({});
  }

  async getTaskByType(status: string) {
    const isImportant =
      status === 'not-urgent-important' || status === 'urgent-important';

    const isUrgent =
      status === 'urgent-important' || status === 'urgent-not-important';

    return this.tasksRepository.find({
      isImportant: isImportant,
      isUrgent: isUrgent,
    });
  }

  async getNumberOfTasks(): Promise<any> {
    return {
      urgentImportantCount: (await this.getTaskByType('urgent-important'))
        .length,
      notUrgentImportantCount: (
        await this.getTaskByType('not-urgent-important')
      ).length,
      urgentNotImportantCount: (
        await this.getTaskByType('urgent-not-important')
      ).length,
      notUrgentNotImportantCount: (
        await this.getTaskByType('not-urgent-not-important')
      ).length,
    };
  }

  async deleteTask(taskId: string): Promise<Task[]> {
    return this.tasksRepository.deleteOne({ id: taskId });
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, isImportant, isUrgent } = createTaskDto;

    return this.tasksRepository.create({
      id: uuid(),
      title,
      description,
      isImportant,
      isUrgent,
      status: TaskStatus.OPEN,
    });
  }

  async updateTask(taskId: string, taskUpdates: UpdateTaskDto): Promise<Task> {
    return this.tasksRepository.findOneAndUpdate({ id: taskId }, taskUpdates);
  }
}
