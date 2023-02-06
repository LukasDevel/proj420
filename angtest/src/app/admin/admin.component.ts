import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Userprof } from '../Userprof';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private us : UserService) {}
  x : Array<Userprof> = [];
  users = this.us.adminUser().subscribe((res)=> {
    this.x = res
  })


  



}
