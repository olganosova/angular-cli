import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal/modal-basic';
import { NgbdModalContent } from './modal/modal-component-content';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AgGridModule} from "ag-grid-angular/main";

import { rootRouterConfig } from './app.routes';
import {Config} from './common/Config';
import {AuthGuard} from "./common/auth-guard";
import {AuthService} from "./common/auth.service";
import {HttpService} from "./http/http.service";
import {Broadcaster} from "./common/events-shared.service";
import {ValidateOnBlurDirective} from './common/directives/validate-onblur.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NgbdModalBasic,
    NgbdModalContent,
    ValidateOnBlurDirective,
    ContactComponent,
    HelpComponent,
    LoginComponent,
    HeaderComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  entryComponents: [NgbdModalContent], ///////to pass component to Modal!!!!!!!!!!!!!!!!!
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    NgbModule.forRoot(), // Add Bootstrap module here.
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AgGridModule.withComponents(
      [RedComponentComponent]
    )
  ],
  providers: [
    Config,
    AuthGuard,
    AuthService,
    HttpService,
    Broadcaster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
