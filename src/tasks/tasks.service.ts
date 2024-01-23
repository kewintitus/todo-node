import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';
import { CreateTaskDTO } from './dto/CreateTask.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  createTask(taskDto: CreateTaskDTO) {
    const task = new this.taskModel(taskDto);

    return task.save();
  }
}
