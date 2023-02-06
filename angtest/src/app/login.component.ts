import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl,
  FormGroup,
  Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
import { Userprof } from './Userprof';


@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isActive = true;
  constructor(private router : Router, private user: Userprof){}
  

  form : FormGroup = new FormGroup({
    username : new FormControl(this.user.username,[Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    email : new FormControl(this.user.email,[Validators.required, Validators.email]),
    password : new FormControl(this.user.password, [Validators.required, Validators.minLength(8), Validators.max(20)])
  })
  submit() {
    if(this.form.valid){
      
      let username = this.form.get("username")?.value;
      let email = this.form.get("email")?.value;
      let password = this.form.get("password")?.value;
      this.user.initUser(username, email, password);
      
      this.submiter.emit(this.user.instance);
      this.isActive = false;
      this.router.navigate(['/home']);
      
    }  
    
  }
 @Output() submiter : EventEmitter<Userprof> = new EventEmitter();

 

  
}