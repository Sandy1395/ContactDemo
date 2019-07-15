import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactServiceService} from '../../../Services/contact-service.service';
@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {
  singleRow: any = [];
  constructor(private route: ActivatedRoute, private contactService: ContactServiceService) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
              if (params) {
                  this.contactService.getsingleData(params['id']).subscribe((res) => {
                      this.singleRow = res;
                  }, (err) => {
                      console.log('error', err);
                  });
              }
      });
  }

}
