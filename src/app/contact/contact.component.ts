/**
 * Created by Administrator on 3/1/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from "../http/http.service";


@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  org: string;
  data: any;
  repos: Observable<any>;
  errorMessage: string;


  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  makePost() {
    this.data = {firstName:'Jeremey', lastName: 'Johnson'};
    this.httpService.makeRequest('makePost', 'post', this.data)
      .subscribe(
        repos => { this.repos = repos },
        error =>  this.errorMessage = <any>error);
  };

  ngOnInit() {
    let id = this.route.params['org']; /// not working

    this.route.data.subscribe(data => {
      this.data = data;
      // if (this.org) {
      //   this.github.getReposForOrg(this.org)
      //     .subscribe(
      //       repos => { this.repos = repos },
      //       error =>  this.errorMessage = <any>error);
      // }

    });

    this.route.params.subscribe(params => {
      this.org = params['org'];
      this.httpService.makeRequest('getRepos', 'get')
        .subscribe(
          repos => { this.repos = repos },
          error =>  this.errorMessage = <any>error);

    });


}
}
