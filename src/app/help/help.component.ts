/**
 * Created by Administrator on 3/1/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Config} from '../common/Config';

@Component({
  selector: 'help-component',
  templateUrl: './help.component.html'
})
export class HelpComponent  implements OnInit {


  constructor(private _config: Config) {
  }

  ngOnInit() {

  }
}
