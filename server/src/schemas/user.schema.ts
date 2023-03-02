import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @IsNotEmpty()
    @Prop()
    displayName: string;

    @IsEmail()
    @Prop()
    email: string;

    @IsNotEmpty()
    @Prop()
    photoUrl: string;


}

export const UserSchema = SchemaFactory.createForClass(User);