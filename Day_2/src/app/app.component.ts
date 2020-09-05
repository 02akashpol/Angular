import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  task = new FormControl;

  title = 'angular-demo';

  inputText = "Type your comment here...";

  btnText = "Submit";

  taskList:any = [];

  addTask() {

    this.taskList.push(this.task.value);

    const inputTask = this.task.value;
  };

  */

  inputEmailText = "abc@gmail.com";

  inputPasswordText = "password";

  inputEmailData = new FormControl();

  inputPasswordData = new FormControl();

}

