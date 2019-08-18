import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiationWizardSubscriptionPlanComponent } from './organiation-wizard-subscription-plan.component';

describe('OrganiationWizardSubscriptionPlanComponent', () => {
  let component: OrganiationWizardSubscriptionPlanComponent;
  let fixture: ComponentFixture<OrganiationWizardSubscriptionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiationWizardSubscriptionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiationWizardSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
