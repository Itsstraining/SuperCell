import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelsisComponent } from './excelsis.component';

describe('ExcelsisComponent', () => {
  let component: ExcelsisComponent;
  let fixture: ComponentFixture<ExcelsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
