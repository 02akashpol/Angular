import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl } from '@angular/forms'

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent implements OnInit {

  constructor(

    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
    ) { 

  }

  ngOnInit(): void {
  }

  public fbInput = this.fb.group({

    email: ['', Validators.required],
    password: ['', Validators.required]

  });
  
  public sccMsg: any = [];

  async deleteRecordFun() {

    const recvInputData = this.fbInput.value;

    const url = 'http://localhost:3000/deleterecords';
    
    const recvData = await this.http.post(url, recvInputData).toPromise();

    console.log(recvData);

    this.sccMsg = recvData;

    console.log(this.sccMsg.affectedRows);

    if(this.sccMsg.affectedRows != 0) {

      document.querySelector("#alertId").innerHTML = "You have deleted your account successfully.";

      sessionStorage.removeItem('sid');
      this.router.navigate(['log-in']);

    } else {

      document.querySelector("#alertId").innerHTML = "Please provide correct inputs.";
    }

    this.fbInput.reset();
  }

}
