import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {Page4Component} from './page4/page4.component';
import {Page5Component} from './page5/page5.component';
import {Page6Component} from './page6/page6.component';
import {Page7Component} from './page7/page7.component';


const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'page4', component: Page4Component},
  {path: 'page5', component: Page5Component},
  {path: 'page6', component: Page6Component},
  {path: 'page7', component: Page7Component},
  {path: '', redirectTo: "acceuil", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
