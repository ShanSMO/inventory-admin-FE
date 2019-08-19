import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLogoUploadComponent } from './organization-logo-upload.component';

describe('OrganizationLogoUploadComponent', () => {
  let component: OrganizationLogoUploadComponent;
  let fixture: ComponentFixture<OrganizationLogoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationLogoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLogoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
