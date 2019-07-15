import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewContactPageComponent } from './Components/new-contact-page/new-contact-page.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// Added Extra Packages
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleContactComponent } from './Components/contact-list/single-contact/single-contact.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    NewContactPageComponent,
    ContactListComponent,
    SingleContactComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [ContactListComponent, NavigationBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
