import {Injectable} from '@angular/core';
import {Province} from './models';


@Injectable()
export class Config {

  SETTINGS: {} =
  {
    fakeMode: true,
    livePrefix: 'https://api.github.com/orgs/angular/',
    mockPrefix: '../../assets/mocks/'

  };

  public provinces: Province[] = [
    { "code": "", "name": "" },
    { "code": "ON", "name": "Ontario" },
    { "code": "BC", "name": "British Columbia" },
    { "code": "QB", "name": "Quebec" }
  ];


  images: {} =
  {
    logo: require("../../assets/images/Scotiabank-Logo.jpg"),
    logoAlfatech: require("../../assets/images/alfaTechLogoGr.png")
  };

  constructor() {

  }

  getUrlPrefix() {
    return this.SETTINGS['fakeMode'] ? this.SETTINGS['mockPrefix'] : this.SETTINGS['livePrefix'] ;
  };

  getImage(key: any) {
    return this.images[key];
  }

  // getUrl(key: string) {
  //   let url = this.urls.filter(
  //     url => url.name === key);
  // }
  //

}
;
