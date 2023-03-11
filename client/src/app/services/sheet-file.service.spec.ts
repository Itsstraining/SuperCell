import { TestBed } from '@angular/core/testing';

import { SheetFileService } from './sheet-file.service';

describe('SheetFileService', () => {
  let service: SheetFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
