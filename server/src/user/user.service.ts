import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { getApp } from 'firebase-admin/app';
import { Auth, DecodedIdToken, getAuth, UserRecord } from 'firebase-admin/auth';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {

  private auth: Auth;

  constructor(@InjectModel('User') private userModel: Model<User>) {
    const admin = getApp();
    this.auth = getAuth(admin);
  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken> {
    let decodedData = await this.auth.verifyIdToken(idToken);
    return decodedData;
  }

  async getUser() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      return null;
    }
  }

  async create(user: User) {
    try {
      let availableUser = await this.findOneByUid(user.uid);
      if (!availableUser) {
        console.log("user", user)
        return await new this.userModel(user).save();
      } else {
        console.log("user with uid already exists", user.uid)
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  async findAll() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      return null;
    }
  }

  async findOneByUid(uid: string) {
    try {
      return await this.userModel.findOne({ uid: uid }).exec();
    } catch (error) {
      return null;
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email: email }).exec();
    } catch (error) {
      return null;
    }
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
