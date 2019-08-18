import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.sass']
})
export class OrganizationRegisterComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();

  organizationForm: FormGroup = new FormGroup({
    companyName: new FormControl(),
    owner: new FormControl(),
    contactNumber: new FormControl(),
    emailAddress: new FormControl(),
    userName: new FormControl(),
    userPassword: new FormControl(),
    confirmPassword: new FormControl(),
  });


  constructor() { }

  ngOnInit() {

  }

  saveAndNext() {
    const object = {
      currentStep: 1,
      nextStep: 2,
      status: 'FINISHED'
    };
    this.stepStatus.emit(object);
  }

}
