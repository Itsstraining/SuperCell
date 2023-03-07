import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @IsNotEmpty()
    @Prop()
    name: string;

    @IsEmail()
    @Prop()
    email: string;

    @IsNotEmpty()
    @Prop()
    picture: string;

    @IsNotEmpty()
    @Prop()
    uid: string;


}

export const UserSchema = SchemaFactory.createForClass(User);