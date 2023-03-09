import { Module } from '@nestjs/common';
import { SheetFileService } from './sheet-file.service';
import { SheetFileController } from './sheet-file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SheetFile, SheetFileSchema } from 'src/schemas/sheet-file.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SheetFile.name, schema: SheetFileSchema }])],
  controllers: [SheetFileController],
  providers: [SheetFileService]
})
export class SheetFileModule {}
