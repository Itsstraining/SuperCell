import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';

@Injectable()
export class SheetFileService {
    constructor(@InjectModel(SheetFile.name) private SheetFileModel: Model<SheetFileDocument>) {}

  async create(createSheetFileDto: SheetFile): Promise<SheetFile> {
    const createdSheetFile = new this.SheetFileModel(createSheetFileDto);
    return createdSheetFile.save();
  }

  async findAll(): Promise<SheetFile[]> {
    return this.SheetFileModel.find().exec();
  }
}
