import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Task, TaskDocument } from '../schema/task.schema';

@Injectable()
export class TasksRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findOne(taskFilterQuery: FilterQuery<Task>): Promise<Task> {
    return this.taskModel.findOne(taskFilterQuery);
  }

  async deleteOne(taskFilterQuery: FilterQuery<Task>): Promise<any> {
    return this.taskModel.deleteOne(taskFilterQuery);
  }

  async find(taskFilterQuery: FilterQuery<Task>): Promise<Task[]> {
    return this.taskModel.find(taskFilterQuery);
  }

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async findOneAndUpdate(
    taskFilterQuery: FilterQuery<Task>,
    task: Partial<Task>,
  ): Promise<Task> {
    return this.taskModel.findOneAndUpdate(taskFilterQuery, task, {
      new: true,
    });
  }
}
