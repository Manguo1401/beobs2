import { Component } from '@angular/core'

import { Router } from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component ({
	selector: 'my-user-home-page',
	templateUrl: 'user_home.page.html'
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
    //logoutaction();
    let router = this.router;
    setTimeout(function () {
      router.navigate(['/login']);
}, 1000);

  }

  logoutaction(){
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    //this._usernameSource = new BehaviorSubject<string>('');
  }
}
