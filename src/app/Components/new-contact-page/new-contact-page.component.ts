import * as moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from  '../../Model/contactForm';
import { NgForm } from '@angular/forms';
import { ContactServiceService } from '../../Services/contact-service.service';
import {NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-contact-page',
  templateUrl: './new-contact-page.component.html',
  styleUrls: ['./new-contact-page.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class NewContactPageComponent implements OnInit {
  model = new Contact();
  @ViewChild(NgForm) myForm: NgForm;
  public genders = [
    { value: 'Female', display: 'Female' },
    { value: 'Male', display: 'Male' }
  ];
    successMessage: boolean = false;
  constructor(private contactService: ContactServiceService) { }
  ngOnInit() {
  }
onSubmit() {
    const data = {...this.model};
    data.dob = moment(this.model.dob).format('YYYY-MM-DD');
    this.contactService.addContacts(data);
    this.successMessage = true;
    this.myForm.resetForm();
}
}
