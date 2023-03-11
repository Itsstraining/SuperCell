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

  @Put('update')
  async update(@Body() sheetFile: SheetFileDocument, @Headers('') headers: any) {
    try {
      let authHeader = headers.authorization;
      authHeader = authHeader.replace('Bearer ', '');
      let data = await this.userService.verifyIdToken(authHeader);
      if (data.uid != sheetFile.owner.uid) {
        throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
      } else {
        return this.sheetFileService.update(sheetFile);
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

  @Get('file')
  async findRequest(@Headers('') headers: any) {
    
  }

}
