import { Controller } from '@nestjs/common';
import { SheetFileService } from './sheet-file.service';

@Controller('sheet-file')
export class SheetFileController {
  constructor(private readonly sheetFileService: SheetFileService) {}
}
