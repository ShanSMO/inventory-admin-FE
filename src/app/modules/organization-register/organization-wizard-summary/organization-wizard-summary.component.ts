import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-wizard-summary',
  templateUrl: './organization-wizard-summary.component.html',
  styleUrls: ['./organization-wizard-summary.component.sass']
})
export class OrganizationWizardSummaryComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPage(direction) {
    let object = {};

    if (direction == 'NEXT') {
      object = {
        currentStep: 4,
        nextStep: -1,
        status: 'FINISHED'
      };
    } else {
      object = {
        currentStep: 4,
        nextStep: 3,
        status: 'FINISHED'
      };
    }

    this.stepStatus.emit(object);
  }

  finish() {
    this.route.navigateByUrl('/dashboard');
  }

}
