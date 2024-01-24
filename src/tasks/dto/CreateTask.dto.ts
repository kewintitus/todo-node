import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  createdOn?: Date;
  modifiedOn?: Date;
  //   status?: string;
  //   isActive?: boolean;
}
