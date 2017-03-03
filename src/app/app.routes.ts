import { Routes } from '@angular/router';

import {AuthGuard} from './common/auth-guard';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent,  data: { title: 'Heroes List' }},
  { path: 'contact/:org', component: ContactComponent},
  { path: 'help', component: HelpComponent,  canActivate: [AuthGuard] },
  { path: '**', component: HelpComponent }

];

