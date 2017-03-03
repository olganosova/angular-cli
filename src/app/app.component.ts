import { Component,  OnInit} from '@angular/core';
//import { Router, NavigationEnd} from '@angular/router';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import {Config} from './common/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'WOW, app works!';
  //
  // constructor(private router: Router) {
  //   router.events.subscribe((val) => {
  //     // see also
  //     //console.log(val instanceof NavigationEnd)
  //   });
  // }
  //
  constructor(router:Router) {
    let st = router.routerState;
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit() {

  }


}
