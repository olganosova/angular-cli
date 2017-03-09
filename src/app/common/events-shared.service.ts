import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//
@Injectable()
export class Broadcaster {

  public loggedInUser: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public loginUser(username : string): void {

    this.loggedInUser.next(username);


  }
}
