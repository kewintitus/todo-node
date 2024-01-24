import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDTO } from './dto/CreateTask.dto';
import { UpdateTaskDTO } from './dto/UpdateTask.dto';
import { DeleteTaskDTO } from './dto/DeleteTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    try {
      console.log(createTaskDTO);
      return this.tasksService.createTask(createTaskDTO);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  getTasks() {
    try {
      return this.tasksService.getTasks();
    } catch (error) {
      return { error: error.message };
    }
  }

  @Patch()
  updateTask(@Body() updateTaskDTO: UpdateTaskDTO) {
    try {
      return this.tasksService.updateTask(updateTaskDTO);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Delete()
  deleteTask(@Query() deleteTaskDTO: DeleteTaskDTO) {
    try {
      return this.tasksService.deleteTask(deleteTaskDTO);
    } catch (error) {
      return { error: error.message };
    }
  }
}
