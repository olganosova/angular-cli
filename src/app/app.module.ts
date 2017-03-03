import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal/modal-basic';
import { NgbdModalContent } from './modal/modal-component-content';

import { rootRouterConfig } from './app.routes';
import {Config} from './common/Config';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import {AuthGuard} from "./common/auth-guard";
import {AuthService} from "./common/auth.service";
import {HttpService} from "./http/http.service";

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalBasic,
    NgbdModalContent,
    ContactComponent,
    HelpComponent,
    HeaderComponent
  ],
  entryComponents: [NgbdModalContent], ///////to pass component to Modal!!!!!!!!!!!!!!!!!
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [
  Config,
    AuthGuard,
    AuthService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
