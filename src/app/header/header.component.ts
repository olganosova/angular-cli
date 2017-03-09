/**
 * Created by Administrator on 3/1/2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Config} from '../common/Config';
import {Broadcaster} from "../common/events-shared.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  title = 'WOW, app works!';
  imageFile: string;
  path: any;
  router: Router;
  username: string;

loggedIn: boolean;

  constructor(private _config: Config, data: Router, private broadcaster: Broadcaster) {
    this.router = data;


  }

  ngOnInit() {
    this.imageFile =  this._config.getImage('logo');  // require("../assets/images/alfaTechLogoGr.png");
    //this.path = this._location;

    this.broadcaster.loggedInUser.subscribe(
      value => {
        this.username= value;
      }
    );
  }




}
