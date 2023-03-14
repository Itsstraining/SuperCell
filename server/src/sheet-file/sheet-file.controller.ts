import { Body, Controller, Get, Headers, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';
import { UserService } from 'src/user/user.service';
import { SheetFileService } from './sheet-file.service';

@Controller('sheetfile')
export class SheetFileController {
  constructor(
    private readonly sheetFileService: SheetFileService,
    private readonly userService: UserService) { }

  @Post()
  async create(@Body() sheetFile: SheetFileDocument, @Headers('') headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      if (data.uid != sheetFile.owner.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      }
      return this.sheetFileService.create(sheetFile);
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('all')
  async findAll(@Headers('') headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      if (data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.findAll();
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  // @Put('update')
  // async update(@Body() sheetFile: SheetFileDocument, @Headers('') headers: any) {
  //   try {
  //     let authHeader = headers.authorization;
  //     authHeader = authHeader.replace('Bearer ', '');
  //     let data = await this.userService.verifyIdToken(authHeader);
  //     console.log(`update sheetfile name for user: ${data.email}}`);
  //     if (data.uid != sheetFile.owner.uid) {
  //       throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
  //     } else {
  //       return this.sheetFileService.update(sheetFile);
  //     }
  //   } catch (error) {
  //     throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  //   }
  // }


  @Put('rename')
  async rename(@Headers('') headers: any, @Body() sheetFile: SheetFileDocument) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`rename sheetfile for user: ${data.email}`);
      if (!data.uid) {
        console.log('Invalid User')
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.rename(sheetFile);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('user/:id')
  async findByUserId(@Param('id') _id: string, @Headers('') headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`find sheetfiles for user: ${data.email}, _id: ${_id}`);
      if (!data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.findByUserId(_id);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('editting/:id')
  async findEdittingById(@Param('id') _id: string, @Headers('') headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`find editting sheetfile for user: ${data.email}, id: ${_id}`);
      if (!data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.findEdittingById(_id);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('request/:id')
  async findRequest(@Headers('') headers: any, @Param('id') uid: string) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`find sheetfile for user: ${data.email}`);
      if (!data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.findRequest(uid);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Put('invite')
  async inviteUser(@Headers('') headers: any, @Body() sheetFile: SheetFileDocument) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`invite user from file : ${sheetFile.title}`);
      if (!data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.inviteUser(sheetFile);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  @Put('accept/:id')
  async acceptRequest(@Headers('') headers: any, @Body() sheetFile: SheetFileDocument, @Param('id') uid: string) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      console.log(`update sheetfile editting for user: ${data.email}`);
      if (!data.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.acceptRequest(sheetFile, uid);
      }
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }


}
