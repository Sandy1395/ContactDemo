import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: any = [];
  singleRowData;
  constructor(private router: Router, private modalService: NgbModal, private contactService: ContactServiceService) { }

  ngOnInit() {
    this.getAllContact();
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
