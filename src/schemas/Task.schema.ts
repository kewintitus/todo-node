import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdOn: Date;

  @Prop({ default: Date.now })
  modifiedOn: Date;

  @Prop({
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo',
  })
  status: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
