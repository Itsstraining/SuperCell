import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class SheetFileService {

  constructor(
    @InjectModel(SheetFile.name)
    private sheetFileModel: Model<SheetFileDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  async create(createSheetFileDto: SheetFile) {
    try {
      console.log(createSheetFileDto);
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

  async findByUserId(id: string) {
    try {
      return await this.sheetFileModel
        .find({ owner: { $eq: Object(id) } })
        .select('-content')
        .populate('owner', 'name uid', this.userModel)
        .exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findEdittingById(id: string) {
    try {
      return await this.sheetFileModel.findOne({ id: id, isEditting: true }).exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
