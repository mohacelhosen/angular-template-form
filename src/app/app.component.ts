import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form ={
    fname:'',
    lname:'',
    age:'',
    email:'',
    contact:'',
    password:''
  }

  integerRegex = /^\d+$/;
  emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  registrationValue(){
    console.log(this.form)
  }
}
