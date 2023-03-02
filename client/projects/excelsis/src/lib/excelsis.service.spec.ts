import { TestBed } from '@angular/core/testing';

import { ExcelsisService } from './excelsis.service';

describe('ExcelsisService', () => {
  let service: ExcelsisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelsisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
