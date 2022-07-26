import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/type/:type')
  getTaskByStatus(@Param('type') type: string): Task[] {
    return this.taskService.getTaskByType(type);
  }

  @Get('/id/:id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getTask(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Task[] {
    return this.taskService.deleteTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Put('/update/:id')
  updateTask(
    @Body() createTaskDto: CreateTaskDto,
    @Param('id') id: string,
  ): Task {
    return this.taskService.updateTask(createTaskDto, id);
  }
}
