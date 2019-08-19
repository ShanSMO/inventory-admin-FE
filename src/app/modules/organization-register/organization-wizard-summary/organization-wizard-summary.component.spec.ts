import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationWizardSummaryComponent } from './organization-wizard-summary.component';

describe('OrganizationWizardSummaryComponent', () => {
  let component: OrganizationWizardSummaryComponent;
  let fixture: ComponentFixture<OrganizationWizardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationWizardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationWizardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
