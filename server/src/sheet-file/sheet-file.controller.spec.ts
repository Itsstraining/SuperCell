import { Test, TestingModule } from '@nestjs/testing';
import { SheetFileController } from './sheet-file.controller';
import { SheetFileService } from './sheet-file.service';

describe('SheetFileController', () => {
  let controller: SheetFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheetFileController],
      providers: [SheetFileService],
    }).compile();

    controller = module.get<SheetFileController>(SheetFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
