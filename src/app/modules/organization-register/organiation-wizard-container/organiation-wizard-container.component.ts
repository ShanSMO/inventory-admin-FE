import {Component, OnInit, ViewChild} from '@angular/core';
import {OrganizationRegisterComponent} from '../organization-register/organization-register.component';

@Component({
  selector: 'app-organiation-wizard-container',
  templateUrl: './organiation-wizard-container.component.html',
  styleUrls: ['./organiation-wizard-container.component.sass']
})
export class OrganiationWizardContainerComponent implements OnInit {

  step = 1;

  constructor() { }

  ngOnInit() {

  }

  getStepStatus(event) {
    this.step = event.nextStep;
  }

}
