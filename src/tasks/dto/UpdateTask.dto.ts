import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  //   @IsNotEmpty()
  @IsString()
  title?: string;

  //   @IsNotEmpty()
  @IsString()
  description?: string;

  //   @IsNotEmpty()
  //   @IsString()
  status?: string;
}
