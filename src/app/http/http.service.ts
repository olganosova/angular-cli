import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response, Headers, Request, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import {Config} from '../common/Config';

export class URL {
  name: string;
  endPoints: { live: string, mock: string };
}
const URLS: URL[] = [
  {name: 'getRepos', endPoints: {live: 'repos', mock: 'repos.json'}},
  {name: 'makePost', endPoints: {live: 'makepost', mock: 'makepost.json'}},
  {name: 'login', endPoints: {live: 'login', mock: 'login.json'}}
];
const PREFIXES: {} =
{
  livePrefix: 'https://api.github.com/orgs/angular/',
  mockPrefix: '../../assets/mocks/'

};

@Injectable()
export class HttpService {
  urls: Array<any>;
  prefix: string;

  constructor(private http: Http, private config: Config) {
    this.prefix = config.SETTINGS['fakeMode'] ? PREFIXES['mockPrefix'] : PREFIXES['livePrefix'];
    this.urls = URLS;
  }


  makeRequest(path: string, method: string, payload?: any) {
    let params = new URLSearchParams();

    let url = this.getEndPoint(path);

    let request = this.setRequestOptions(method, url, payload, params);

    return this.http.request(request)
      .map((res) => res.json())
      .catch(this.handleError);
  };


  private handleError(error: Response | any) {

    return Observable.throw(error);
  }

  private getEndPoint(path: string) : string {

    var mode = this.config.SETTINGS['fakeMode'] ? 'mock' : 'live';
    var endPointObj = this.urls.filter(url => url.name === path)[0];
    return this.prefix + endPointObj['endPoints'][mode];
  };

  private setRequestOptions(method: string, url: string, body: any, search?: URLSearchParams) : Request{

    let headers = new Headers({'Content-Type': 'application/json'});

    var options = new RequestOptions({
      method: method,
      headers: headers,
      url: url,
      body: body,
      search: search ? search : null
    });

    return new Request(options);

  }
}
