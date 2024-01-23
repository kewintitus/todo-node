import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDTO } from './dto/CreateTask.dto';
import { UpdateTaskDTO } from './dto/UpdateTask.dto';
import { DeleteTaskDTO } from './dto/DeleteTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    console.log(createTaskDTO);
    return this.tasksService.createTask(createTaskDTO);
  }

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Patch()
  updateTask(@Body() updateTaskDTO: UpdateTaskDTO) {
    return this.tasksService.updateTask(updateTaskDTO);
  }

  @Delete()
  deleteTask(@Body() deleteTaskDTO: DeleteTaskDTO) {
    return this.tasksService.deleteTask(deleteTaskDTO);
  }
}
