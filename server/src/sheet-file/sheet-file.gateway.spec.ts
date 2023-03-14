import { Test, TestingModule } from '@nestjs/testing';
import { SheetFileGateway } from './sheet-file.gateway';

describe('SheetFileGateway', () => {
  let gateway: SheetFileGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SheetFileGateway],
    }).compile();

    gateway = module.get<SheetFileGateway>(SheetFileGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
