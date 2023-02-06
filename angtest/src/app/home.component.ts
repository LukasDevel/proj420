import { Component } from "@angular/core";

import { Userprof } from "./Userprof";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent{

    private user  = new Userprof("KrtekBystrozraký", "krtecek@mail.cz","1234567");

    constructor(){}
    

    sdf = this.user.username;
    
}

