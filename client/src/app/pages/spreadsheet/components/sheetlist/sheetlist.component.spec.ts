import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetlistComponent } from './sheetlist.component';

describe('SheetlistComponent', () => {
  let component: SheetlistComponent;
  let fixture: ComponentFixture<SheetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
