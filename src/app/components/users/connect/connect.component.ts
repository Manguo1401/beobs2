import {Component, OnInit} from '@angular/core';
import { FormsModule }    from '@angular/forms'
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../objects/user';
import { Router } from '@angular/router'

//Angular2Tutorial/backend at master · GuillaumeUnice/Angular2Tutorial · GitHub

@Component({
  selector: 'connect',
  templateUrl: 'connect.component.html',
  styleUrls: ['connect.component.css'],
  providers: []

})
export class ConnectComponent implements OnInit {

  private _isAuthenticated: boolean;
  public user: User =  new User();

  constructor(
    private _myService : UserService,
    private router: Router
  ){}

  ngOnInit() {
    this._myService.username$.subscribe(
      res => {
        if(res) {
          this._isAuthenticated = true;
          this.user.username = res;
        } else {
          this._isAuthenticated = false;
          this.user.username = null;
        }
      }
    )
  }

  test(){console.log(JSON.stringify(this.user))}

  login(value: User) {
    //event.preventDefault();
    console.log("connect"+ JSON.stringify(value));
    this._myService.login(value.username, value.password)
    .then(() => {
      this._isAuthenticated = true;
      //window.location.href = '/home';
      this.router.navigateByUrl('./home');
    });
    /*this.user.password = ''; //gerer ici des erreurs
    this.user.username = '';*/

    this._isAuthenticated = true;
    //event.stopPropagation(); //pour eviter le rechargement de la page, c'est ce qui sera souhaité
  }

}
