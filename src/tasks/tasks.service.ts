import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const task = new this.taskModel(taskDto);

      return await task.save();
    } catch (error) {
      throw new HttpException(
        'Failed to create task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getTasks() {
    try {
      return await this.taskModel
        .find({ isActive: true })
        .sort({ createdOn: -1 });
    } catch (error) {
      throw new HttpException('Failed to get tasks', HttpStatus.NOT_FOUND);
    }
  }

  async updateTask(updateTaskDTO: UpdateTaskDTO) {
    try {
      await this.taskModel.findByIdAndUpdate(updateTaskDTO.id, updateTaskDTO);
      return await this.taskModel.findById(updateTaskDTO.id);
    } catch (error) {
      throw new HttpException(
        'Failed to update task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteTask(deleteTaskDTO: DeleteTaskDTO) {
    try {
      await this.taskModel.findByIdAndUpdate(deleteTaskDTO.id, {
        isActive: false,
      });
    } catch (error) {
      throw new HttpException(
        'Failed to delete task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
