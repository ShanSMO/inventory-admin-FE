import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-organization-logo-upload',
  templateUrl: './organization-logo-upload.component.html',
  styleUrls: ['./organization-logo-upload.component.sass']
})
export class OrganizationLogoUploadComponent implements OnInit {

  @Output() stepStatus: EventEmitter<any> = new EventEmitter();
  browsedImage: any = '';
  selectedFile: any = null;

  constructor() { }

  ngOnInit() {
  }

  logoUpdatePreview($event): void {
      this.readFile($event);
  }

  readFile(event): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;

    if (file) {
      const fileReader: FileReader = new FileReader();

      fileReader.onload = (e) => {
        this.browsedImage = fileReader.result;
      };

      fileReader.readAsDataURL(file);
    }
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
