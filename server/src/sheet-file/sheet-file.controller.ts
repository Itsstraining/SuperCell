import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SheetFile, SheetFileDocument } from 'src/schemas/sheet-file.schema';
import { SheetFileService } from './sheet-file.service';

@Controller('sheetfile')
export class SheetFileController {
  constructor(private readonly sheetFileService: SheetFileService) { }

  @Post()
  create(@Body() sheetFile: SheetFile) {
    return this.sheetFileService.create(sheetFile);
  }

  @Get()
  findAll(@Body() sheetFile: SheetFile) {
    return this.sheetFileService.findAll();
  }

  @Put('update')
  update(@Body() sheetFile: SheetFileDocument) {
    return this.sheetFileService.update(sheetFile);
  }

  @Get('user/:id')
  findByUserId(@Param('id') userId: string) {
    return this.sheetFileService.findByUserId(userId);
  }
}
