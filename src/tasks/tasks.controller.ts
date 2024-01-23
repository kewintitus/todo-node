import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDTO } from './dto/CreateTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    console.log(createTaskDTO);
    return this.tasksService.createTask(createTaskDTO);
  }
}
