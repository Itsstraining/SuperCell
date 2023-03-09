import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type SheetFileDocument = HydratedDocument<SheetFile>;

@Schema({timestamps: true})
export class SheetFile {
  [x: string]: any;
    
  @IsNotEmpty()
  @Prop()
  title: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  shared: User[];

  @Prop()
  content: [];
}

export const SheetFileSchema = SchemaFactory.createForClass(SheetFile);