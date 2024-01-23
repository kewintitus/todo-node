import { IsNotEmpty } from 'class-validator';

export class DeleteTaskDTO {
  @IsNotEmpty()
  id: string;
}
