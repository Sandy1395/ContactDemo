import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from  '../../Model/contactForm';
import { ToastrService } from 'ngx-toastr';
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
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
  constructor(private toastr: ToastrService, private contactService: ContactServiceService) { }
  ngOnInit() {
  }
onSubmit() {
    this.contactService.addContacts(this.model);
    this.toastr.success('Added Contact Successfully', 'Success Message');
    this.myForm.resetForm();
}
}
