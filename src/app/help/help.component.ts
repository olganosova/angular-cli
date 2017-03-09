/**
 * Created by Administrator on 3/1/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'help-component',
  templateUrl: './help.component.html',
})
export class HelpComponent  implements OnInit {

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {

  }
  goToWeatherSite(): void{
    //window.location..='https://www.theweathernetwork.com/ca/weather/15a/ontario/markham';
}
}
