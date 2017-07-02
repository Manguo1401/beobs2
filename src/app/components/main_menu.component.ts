import { Component } from '@angular/core';
import { ConnectComponent } from './connect/connect.component';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'my-main-menu',
  templateUrl: 'main_menu.component.html',
  styleUrls: ['main_menu.style.css','../app.component.css', './css/utils.style.scss']
})

export class MainMenuComponent {
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
    this.router.navigate(['/home']);
    location.reload();
  }
}
