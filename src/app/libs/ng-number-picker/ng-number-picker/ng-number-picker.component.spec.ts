import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNumberPickerComponent } from './ng-number-picker.component';

describe('NgNumberPickerComponent', () => {
  let component: NgNumberPickerComponent;
  let fixture: ComponentFixture<NgNumberPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
