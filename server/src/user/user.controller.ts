import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUserProfile(@Headers() headers: any) {
    let authHeader = headers.authorization;
    authHeader = authHeader.replace('Bearer ', '');
    let data = await this.userService.verifyIdToken(authHeader);
    console.log(data);
    return data;
  }

  @Post()
  async create(@Headers() headers: any) {
    let authHeader = headers.authorization;
    authHeader = authHeader.replace('Bearer ', '');
    let data = await this.userService.verifyIdToken(authHeader);
    let user : User = {
        uid: data.uid,
        name: data.name,
        email: data.email,
        picture: data.picture
    }
    return this.userService.create(user);
  }
}
