import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Province} from '../common/models';
import {Config} from '../common/Config';
import {HttpService} from "../http/http.service";
import {Broadcaster} from "../common/events-shared.service";

@Component({

  templateUrl: './login.component.html',
  styles: ['.has-error{color:red;}']
})

export class LoginComponent implements OnInit {
  model: any = { username: '', password: '', province: 'ON'};
  loading = false;
  returnUrl: string;
 // provinces: Array<any>;
  provinces: Province [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _config: Config,
    private broadcaster: Broadcaster,
    private authenticationService: HttpService){}



  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.provinces = this._config.provinces;
  }

  login() {
    this.loading = true;
    this.broadcaster.loginUser(this.model.username);

    // this.authenticationService.login(this.model.username, this.model.password)
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //
    //       this.loading = false;
    //     });
  }
}
