import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactPageComponent } from './Components/new-contact-page/new-contact-page.component';
import {ContactListComponent} from './Components/contact-list/contact-list.component';
const routes: Routes = [
  {
    path: 'addNewContact',
    component: NewContactPageComponent,
  },
  {
    path: 'listOfContact',
    component: ContactListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
