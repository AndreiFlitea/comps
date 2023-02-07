import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalceholderComponent } from './palceholder.component';

describe('PalceholderComponent', () => {
  let component: PalceholderComponent;
  let fixture: ComponentFixture<PalceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
