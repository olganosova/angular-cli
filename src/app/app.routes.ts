import { Routes } from '@angular/router';

import {AuthGuard} from './common/auth-guard';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { LoginComponent } from './login/login.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent,  data: { title: 'Heroes List', activeTab: 'contact' }},
  { path: 'contact/:org', component: ContactComponent,  data: {activeTab: 'contact'}},
  { path: 'help', component: HelpComponent,  canActivate: [AuthGuard], data: {activeTab: 'help'} },
  { path: 'grid', component: MyGridApplicationComponent,  data: {activeTab: 'grid'} },
  { path: 'login/:returnUrl', component: LoginComponent, data: {activeTab: 'login'}},
  { path: 'login', component: LoginComponent, data: {activeTab: 'login'}},
  { path: '**', component: LoginComponent }

];

