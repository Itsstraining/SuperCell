import { Body, Controller, Get, Headers, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  async getUserProfile(@Headers() headers: any) {
    let authHeader = headers.authorization;
    authHeader = authHeader.replace('Bearer ', '');
    let data = await this.userService.verifyIdToken(authHeader);
    console.log(data);
    return data;
  }

  @Get('info')
  async getUserInfo(@Headers() headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      let user = await this.userService.findOneByUid(data.uid);
      if (!user) {
        throw new HttpException('User Invalid', HttpStatus.FORBIDDEN);
      } else {
        return user;
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

  }

  @Post()
  async create(@Headers() headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      let user: User = {
        uid: data.uid,
        name: data.name,
        email: data.email,
        picture: data.picture
      }
      return this.userService.create(user);
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

  }

  @Get('email/:email')
  async getUserByEmail(@Headers() headers: any, @Param('email') email: string) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      let user = await this.userService.findOneByUid(data.uid);
      if (user) {
        return this.userService.findOneByEmail(email);
      } else {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('all')
  async getAllUsers(@Headers() headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      let user = await this.userService.findOneByUid(data.uid);
      if (user) {
        return this.userService.findAll();
      } else {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    }
  }
}
