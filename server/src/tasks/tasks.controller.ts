import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '../schema/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksCount } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/counts')
  async getNumberOfTasks(): Promise<TasksCount> {
    return this.taskService.getNumberOfTasks();
  }

  @Get(':taskId')
  async getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.getTaskById(taskId);
  }

  @Delete('/:taskId')
  async deleteTask(@Param('taskId') taskId: string): Promise<Task[]> {
    return this.taskService.deleteTask(taskId);
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get('/type/:type')
  async getTaskByStatus(@Param('type') type: string): Promise<Task[]> {
    return this.taskService.getTaskByType(type);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch(':taskId')
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateTask(taskId, updateTaskDto);
  }
}
