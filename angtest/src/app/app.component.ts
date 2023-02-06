import { Component } from '@angular/core';
import { UserService } from './user.service';

import { Userprof } from './Userprof';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private us : UserService){}
  admin = true;
  LogIsAcvite = false;
  HomeIsActive = false;

  onClick(user : Userprof) {
    this.us.saveUser(user)
      .subscribe(res => {
        console.log(res);
      })
    this.LogIsAcvite = false;
    this.HomeIsActive = false;
    
    
    
    
  }
}
