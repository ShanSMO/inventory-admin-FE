import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-organization-logo-upload',
  templateUrl: './organization-logo-upload.component.html',
  styleUrls: ['./organization-logo-upload.component.sass']
})
export class OrganizationLogoUploadComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPage(direction) {
    let object = {};

    if (direction == 'NEXT') {
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

    this.stepStatus.emit(object);
  }

}
