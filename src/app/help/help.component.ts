/**
 * Created by Administrator on 3/1/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'help-component',
  templateUrl: './help.component.html',
})
export class HelpComponent  implements OnInit {
  _location: Location;
  currentUser: string;

  constructor(loc: Location,  private router: Router, private route: ActivatedRoute) {
    this._location = loc;
  }

  ngOnInit() {

    this.currentUser  = this.route.snapshot.params['user'];

    // this.route.params.subscribe(params => {
    //   this.currentUser = this.route.snapshot.parent.params['user'];
    //
    // });
  }
  goToWeatherSite(): void{
    //location.href='https://www.theweathernetwork.com/ca/weather/15a/ontario/markham';

  }
}
