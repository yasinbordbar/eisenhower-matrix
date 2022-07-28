import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TaskStatus } from '../tasks/task.model';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  isImportant: boolean;
  @Prop()
  isUrgent: boolean;
  @Prop()
  status: TaskStatus;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
