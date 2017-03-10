import {Component, OnInit, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


import {Province} from '../common/models';
import {Config} from '../common/Config';
import {LoginService} from "./login.service";
import {Broadcaster} from "../common/events-shared.service";

@Component({

  templateUrl: './login.component.html',
  styles: ['.has-error{color:red;}'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  model: any = {username: '', password: '', province: 'ON'};
  loading = false;
  returnUrl: string;
  provinces: Province [];
  user: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _config: Config,
              private broadcaster: Broadcaster,
              private loginService: LoginService) {
  }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.provinces = this._config.provinces;
  }


  login() {
    //this.loading = true;

    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.user = data;
          localStorage.setItem('loggedInUser', this.user.userfullname);
          this.broadcaster.loginUser(this.user.userfullname);
          this.router.navigate(["/help", {user: this.user.userfullname}]);

        },
        error => {

          this.loading = false;
        });

  }
}
