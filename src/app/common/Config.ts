

// export default class CONFIG {
//
//   static imageFile() {
//     // return  require("../img/logos/alfaTechLogoGr.png");
//     return {
//       images: {
//         logo: require("../img/logos/alfaTechLogoGr.png")
//       }
//     };
//   }
// }


import { Injectable} from '@angular/core';


@Injectable()
export class Config  {

  images: {} =
    {logo: require("../../assets/images/alfaTechLogoGr.png")}

  // images: any[] = [
  //   {logo: require("../img/logos/alfaTechLogoGr.png")}
  // ]
  constructor() {
  }



  getImage(key: any) {
    return this.images[key];
  }

};
