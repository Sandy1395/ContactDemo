import { Injectable } from '@angular/core';
import { Contact } from '../Model/contactForm';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) {}

  addContacts(contact: Contact) {
    return this.http.post('', contact);
  }
  getListContact() {
    return this.http.get('');
  }
  getsingleData(id) {
      return this.http.get('');
  }
}
