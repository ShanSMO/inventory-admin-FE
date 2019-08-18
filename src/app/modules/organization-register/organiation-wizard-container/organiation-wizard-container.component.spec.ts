import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiationWizardContainerComponent } from './organiation-wizard-container.component';

describe('OrganiationWizardContainerComponent', () => {
  let component: OrganiationWizardContainerComponent;
  let fixture: ComponentFixture<OrganiationWizardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiationWizardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiationWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
