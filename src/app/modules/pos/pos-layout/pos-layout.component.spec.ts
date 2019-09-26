import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosLayoutComponent } from './pos-layout.component';

describe('PosLayoutComponent', () => {
  let component: PosLayoutComponent;
  let fixture: ComponentFixture<PosLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
