import { Component } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { consoleTestResultHandler } from 'tslint/lib/test';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajax-demo';

  public list: any = [];
  
  constructor (private http: HttpClient) {

  }

  async ajaxGetFun() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const recvData =  await this.http.get(url).toPromise();

    this.list.push(recvData);

    this.list = recvData;

    console.log(recvData);

    console.log(recvData[0].title);

    console.log(this.list.title);
  }
}

