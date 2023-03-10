import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';

@Injectable()
export class SheetFileService {
  constructor(
    @InjectModel(SheetFile.name)
    private sheetFileModel: Model<SheetFileDocument>,
  ) { }

  async create(createSheetFileDto: SheetFile) {
    try {
      const createdSheetFile = new this.sheetFileModel(createSheetFileDto);
      return createdSheetFile.save();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findAll() {
    try {
      return await this.sheetFileModel.find().exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async update(sheetFile: SheetFileDocument): Promise<SheetFile> {
    try {
      return this.sheetFileModel.findOneAndUpdate(
        { id: sheetFile.id },
        sheetFile,
        { new: true },
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findByUserId(userId: string) {
    try {
      return await this.sheetFileModel.find({ owner: userId }).exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
