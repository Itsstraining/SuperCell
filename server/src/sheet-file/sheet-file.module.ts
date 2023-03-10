import { forwardRef, Module } from '@nestjs/common';
import { SheetFileService } from './sheet-file.service';
import { SheetFileController } from './sheet-file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SheetFile, SheetFileSchema } from 'src/schemas/sheet-file.schema';
import { UserModule } from 'src/user/user.module';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: SheetFile.name, schema: SheetFileSchema }]),
    forwardRef(() => UserModule)
  ],
  controllers: [SheetFileController],
  providers: [SheetFileService]
})
export class SheetFileModule { }
