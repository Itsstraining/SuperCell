import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { SheetFileModule } from './sheet-file.module';

@Injectable()
export class SheetFileService {
  constructor(
    @InjectModel(SheetFile.name)
    private sheetFileModel: Model<SheetFileDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

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
        { content: sheetFile.content },
        { new: true },
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async rename(sheetFile: SheetFileDocument): Promise<SheetFile> {
    try {
      console.log(sheetFile.title);
      return this.sheetFileModel.findOneAndUpdate(
        { _id: sheetFile._id },
        { title: sheetFile.title },
        { new: true },
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findByUserId(id: string) {
    try {
      //find with owner or shared
      let myProject = await this.sheetFileModel
        .find({ owner: { $eq: Object(id) } })
        .populate('shared', 'name uid picture', this.userModel)
        .populate('owner', 'name uid picture', this.userModel)
        .select('-content')
        .sort({ updatedAt: -1 })
        .exec();
      let sharedProject = await this.sheetFileModel
        .find({ shared: { $eq: Object(id) } })
        .populate('owner', 'name uid picture', this.userModel)
        .populate('shared', 'name uid picture', this.userModel)
        .select('-content')
        .sort({ updatedAt: -1 })
        .exec();
      console.log('sharedProject length: ' + sharedProject.length);
      let result: any = [...myProject, ...sharedProject];
      result.sort((a: { updatedAt: number }, b: { updatedAt: number }) => {
        return b.updatedAt - a.updatedAt;
      });

      return [...myProject, ...sharedProject];
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findEdittingById(id: string) {
    try {
      console.log(id);
      return await this.sheetFileModel
        .findOne({ id: id, canCollab: true })
        .exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findRequest(uid: string) {
    try {
      console.log(uid);
      return await this.sheetFileModel
        .find({ inviteList: { $eq: Object(uid) } })
        .select('-content -__v -createdAt -color')
        .populate('owner', 'name uid picture', this.userModel)
        .sort({ updatedAt: -1 })
        .exec();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async inviteUser(sheetFile: SheetFileDocument) {
    try {
      // console.log(sheetFile.inviteList[0])
      // console.log((sheetFile.owner))
      if (sheetFile.inviteList.length > 0) {
        let newInviteList = sheetFile.inviteList.filter(
          (item) => item.uid != sheetFile.owner.uid,
        );
        //check if user is already in shared list
        let isExist: UserDocument;
        newInviteList.forEach((user) => {
          isExist = sheetFile.shared.find((item) => {
            if (item._id == user._id) {
              return user;
            }
          });
          if (isExist) {
            return;
          }
        });
        if (isExist) {
          // console.log(isExist)
          return {
            error: `User ${isExist.name} is already in shared list`,
          };
        }

        let newSheetFile: SheetFile = {
          canCollab: sheetFile.canCollab,
          content: sheetFile.content,
          owner: sheetFile.owner,
          title: sheetFile.title,
          color: sheetFile.color,
          shared: sheetFile.shared,
          inviteList: newInviteList,
        };
        console.log(`${sheetFile._id} was updated`);
        return await this.sheetFileModel.findOneAndUpdate(
          { _id: sheetFile._id },
          newSheetFile,
          { new: true },
        );
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async acceptRequest(sheetFile: SheetFileDocument, uid: string) {
    try {
      if (sheetFile.inviteList.length > 0) {
        let newInviteList = sheetFile.inviteList.filter((item) => {
          console.log(item._id);
          item._id != Object(uid);
        });
        console.log(newInviteList);
        let newSheetFile: SheetFile = {
          canCollab: sheetFile.canCollab,
          content: sheetFile.content,
          owner: sheetFile.owner,
          title: sheetFile.title,
          color: sheetFile.color,
          shared: [...sheetFile.shared, Object(uid)],
          inviteList: newInviteList,
        };
        return await this.sheetFileModel.findOneAndUpdate(
          { _id: sheetFile._id },
          newSheetFile,
          { new: true },
        );
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
