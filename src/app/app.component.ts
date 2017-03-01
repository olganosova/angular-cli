import { Component,  OnInit} from '@angular/core';
import {Config} from './common/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'WOW, app works!';

  constructor(private _config: Config) {
  }


  ngOnInit() {

  }


}
