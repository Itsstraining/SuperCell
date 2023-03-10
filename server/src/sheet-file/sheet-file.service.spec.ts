import { Test, TestingModule } from '@nestjs/testing';
import { SheetFileService } from './sheet-file.service';

describe('SheetFileService', () => {
  let service: SheetFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetFileService],
    }).compile();

    service = module.get<SheetFileService>(SheetFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
