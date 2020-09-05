import { Component } from '@angular/core';

import { Router, RouterModule, ROUTER_CONFIGURATION } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo01';

  linkList: any = [
    {title: "GoToPage1", link: "page1"},
    {title: "GoToPage2", link: "page2"},
    {title: "GoToPage3", link: "page3"},
    {title: "GoToPage4", link: "page4"}

  ]; 

  constructor(private router: Router) {

    
  }
  
  routerFun(page) {

      this.router.navigate([page]);
    }

}


