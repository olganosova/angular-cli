/**
 * Created by Administrator on 3/1/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Config} from '../common/Config';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  title = 'WOW, app works!';
  imageFile: string;

  constructor(private _config: Config) {
  }

  ngOnInit() {
    this.imageFile =  this._config.getImage('logo');  // require("../assets/images/alfaTechLogoGr.png");
  }


}
