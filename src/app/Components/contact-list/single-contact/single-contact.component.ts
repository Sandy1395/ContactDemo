import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactServiceService} from '../../../Services/contact-service.service';
@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {
  singleRow = {};
  constructor(private route: ActivatedRoute, private contactService: ContactServiceService) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.contactService.getsingleData(id).subscribe((res) => {
              this.singleRow = res;
          }, (err) => {
              console.log('error', err);
          });
      }
  }

}
