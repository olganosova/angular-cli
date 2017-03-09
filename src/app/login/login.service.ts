/**
 * Created by Administrator on 3/9/2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


import {HttpService} from "../http/http.service";

@Injectable()
export class LoginService {
  data: any = {}

  constructor(private httpService: HttpService) {

  }


  login(username: string, password: string) {
    this.data.username = username;
    this.data.password = password;
    return this.httpService.makeRequest('login', 'get', this.data)
      .map((res) => res.json());
     // .catch(this.handleError);

  }


}
