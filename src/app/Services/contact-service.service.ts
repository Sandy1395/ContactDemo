import { Injectable } from '@angular/core';
import { Contact } from '../Model/contactForm';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const url = environment.baseApiUrl;
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  constructor(private http: HttpClient) {}

  addContacts(contact: Contact) {
    return this.http.post(url + 'contact', contact);
  }
  getListContact() {
    return this.http.get(url + 'contact');
  }
  getsingleData(id) {
      return this.http.get(url + 'contact/' + id);
  }
}
