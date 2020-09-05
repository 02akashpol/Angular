import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo02';

  constructor (private router: Router) {

  };

  linkList: any = [
    {title: "Project Details", link: "project-details"},
    {title: "Register", link: "register"},
    {title: "Log In", link: "log-in"},
    {title: "About Us", link: "about-us"}

  ];

  linkFun(page) {

    this.router.navigate([page]);
  };
}
