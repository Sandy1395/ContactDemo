import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactServiceService } from '../../Services/contact-service.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: any = [];
  singleRowData;
  constructor(private modalService: NgbModal, private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contactList = [{name: 'abc', dob: '10-3-2019', email: 'abc@g.com', gender: 'male', budget: 200}, {name: 'abcd', dob: '12-6-2019', email: 'abc@g.com', gender: 'female', budget: 200}, {name: 'abcde', dob: '10-7-2019', email: 'abc@g.com', gender: 'male', budget: 200}];
    // this.getAllContact();
  }
  getAllContact() {
    this.contactService.getListContact().subscribe((res) => {
      this.contactList = res;
    }, err => {
      console.log(err);
    });
  }
  openSingleRow(content, row) {
    this.singleRowData = row;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
