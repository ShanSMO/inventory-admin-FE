import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-organiation-wizard-subscription-plan',
  templateUrl: './organiation-wizard-subscription-plan.component.html',
  styleUrls: ['./organiation-wizard-subscription-plan.component.sass']
})
export class OrganiationWizardSubscriptionPlanComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPage(direction) {
    let object = {};

    if (direction === 'NEXT') {
      object = {
        currentStep: 2,
        nextStep: 3,
        status: 'FINISHED'
      };
    } else {
      object = {
        currentStep: 2,
        nextStep: 1,
        status: 'FINISHED'
      };
    }

    console.log(object)

    this.stepStatus.emit(object);
  }

}
