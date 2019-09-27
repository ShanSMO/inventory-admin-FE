import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNumberPickerCircleComponent } from './ng-number-picker-circle.component';

describe('NgNumberPickerCircleComponent', () => {
  let component: NgNumberPickerCircleComponent;
  let fixture: ComponentFixture<NgNumberPickerCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNumberPickerCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNumberPickerCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
