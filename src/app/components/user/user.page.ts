import { Component } from '@angular/core'
import { Router } from '@angular/router';
//import { ConnectComponent } from "../users/connect/connect.component"

import {MainMenuComponent} from '../main_menu.component';
import {UserService} from '../../services/user/user.service';

@Component ({
	selector: 'my-user-home-page',
	templateUrl: 'user.page.html',
  //styleUrls: ['user_banner.css']
})

export class UserHomePage {
	username = localStorage.getItem('username');
  token = localStorage.getItem('token');

  constructor(
      private _myService : UserService,
      private router: Router
    ){}

  logout(){
    console.log("logout");
    this._myService.logout();//.then(() => this.router.navigate(['/login']) );
    //this.logoutaction();
    /*let router = this.router;
    router.navigate(['/login']);*/
    this.router.navigate(['/home']);
    location.reload();
  }

/*  logoutaction(){
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    //this._usernameSource = new BehaviorSubject<string>('');
  }*/
}
