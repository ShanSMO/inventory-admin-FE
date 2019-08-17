import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.sass']
})
export class OrganizationRegisterComponent implements OnInit {

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

}
