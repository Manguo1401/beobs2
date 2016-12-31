import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {UserService} from '../../../services/user/user.service';


@Component({
  selector: 'logout',
  template: ''

})
export class LogoutComponent implements OnInit {

  constructor(
    private _myService : UserService,
    private router: Router
  ){}

  ngOnInit() {
    console.log("logout")
    /*this._myService.logout()
    .then( () =>
      this.router.navigateByUrl('./login')
     );*/
  }
}
