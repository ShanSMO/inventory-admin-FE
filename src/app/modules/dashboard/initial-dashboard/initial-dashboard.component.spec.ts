import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDashboardComponent } from './initial-dashboard.component';

describe('InitialDashboardComponent', () => {
  let component: InitialDashboardComponent;
  let fixture: ComponentFixture<InitialDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
