import { Component } from '@angular/core';
import { ConnectComponent } from "./users/connect/connect.component";
import {UserService} from '../services/user/user.service';

@Component ({
	selector: 'my-home-component',
	templateUrl: 'home_main_page.component.html',
  styleUrls: ['user/user_banner.css']
})

export class HomeMainPage {
  username = localStorage.getItem('username');
  token = localStorage.getItem('token');

  constructor(
      private _myService : UserService,
      //private router: Router
    ){}

  logout(){
    console.log("logout");
    this._myService.logout();//.then(() => this.router.navigate(['/login']) );
    //this.logoutaction();
    /*let router = this.router;
    router.navigate(['/login']);*/
    location.reload();
  }
}
