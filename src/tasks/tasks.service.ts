import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';
import { CreateTaskDTO } from './dto/CreateTask.dto';
import { UpdateTaskDTO } from './dto/UpdateTask.dto';
import { DeleteTaskDTO } from './dto/DeleteTask.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async createTask(taskDto: CreateTaskDTO) {
    const task = new this.taskModel(taskDto);

    return await task.save();
  }

  async getTasks() {
    return await this.taskModel
      .find({ isActive: true })
      .sort({ createdOn: -1 });
  }

  async updateTask(updateTaskDTO: UpdateTaskDTO) {
    await this.taskModel.findByIdAndUpdate(updateTaskDTO.id, updateTaskDTO);
    return await this.taskModel.findById(updateTaskDTO.id);
  }

  async deleteTask(deleteTaskDTO: DeleteTaskDTO) {
    await this.taskModel.findByIdAndUpdate(deleteTaskDTO.id, {
      isActive: false,
    });
  }
}
