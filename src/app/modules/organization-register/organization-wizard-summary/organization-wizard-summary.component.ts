import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-organization-wizard-summary',
  templateUrl: './organization-wizard-summary.component.html',
  styleUrls: ['./organization-wizard-summary.component.sass']
})
export class OrganizationWizardSummaryComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPage(direction) {
    let object = {};

    if (direction == 'NEXT') {
      object = {
        currentStep: 3,
        nextStep: -1,
        status: 'FINISHED'
      };
    } else {
      object = {
        currentStep: 3,
        nextStep: 2,
        status: 'FINISHED'
      };
    }

    this.stepStatus.emit(object);
  }

}
