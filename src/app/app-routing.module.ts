import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactPageComponent } from './Components/new-contact-page/new-contact-page.component';
import { SingleContactComponent } from './Components/contact-list/single-contact/single-contact.component';
import {ContactListComponent} from './Components/contact-list/contact-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/contactList',
    pathMatch: 'full' },
  {
    path: 'addNewContact',
    component: NewContactPageComponent,
  },
  {
    path: 'contactList',
    component: ContactListComponent,
  },
  {
    path: 'contact/:id',
    component: SingleContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
