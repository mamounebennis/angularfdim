import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {ContactComponent} from './contact/contact.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './service/authentication.service';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationValidateurDirective} from '../assets/confirmation-validateur.directive';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    ConfirmationValidateurDirective,
    Page6Component,
    Page7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */}),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
