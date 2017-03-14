import { Component,  OnInit} from '@angular/core';
//import { Router, NavigationEnd} from '@angular/router';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import {Config} from './common/Config';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'WOW, app works!';
  param = {value: 'world'};
  //
  // constructor(private router: Router) {
  //   router.events.subscribe((val) => {
  //     // see also
  //     //console.log(val instanceof NavigationEnd)
  //   });
  // }
  //
  constructor(router:Router,  translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
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
