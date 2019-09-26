import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPosComponent } from './food-pos.component';

describe('FoodPosComponent', () => {
  let component: FoodPosComponent;
  let fixture: ComponentFixture<FoodPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
