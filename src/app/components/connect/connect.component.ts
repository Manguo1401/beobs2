import {Component, OnInit} from '@angular/core'
import { FormsModule }    from '@angular/forms'
import {UserService} from '../../services/user/user.service'
import {User} from '../../objects/user'
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
  register: boolean = false;
  tokenjwt = "vide";
  authfail: boolean = false;

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
          this.tokenjwt = localStorage.getItem('token');
        } else {
          this._isAuthenticated = false;
          this.user.username = null;
        }
      }
    )
  }

  showReg(){
    this.register = true;
  }



  test(){console.log(JSON.stringify(this.user))}

  login(value: User) {
    //event.preventDefault();
    console.log("connect"+ JSON.stringify(value));
    this.authfail = false;
    this._myService.login(value.username, value.password)
    .then(() => {
      this.tokenjwt = localStorage.getItem('token');
      this.user.username = localStorage.getItem('username');
      //window.location.href = '/home';
      console.log("tokenjwt="+ this.tokenjwt);
      if(this.tokenjwt != "")
      {
        this._isAuthenticated = true;
        this.router.navigate(['/user/home']);
        //location.reload();
      }
      else{
        this.authfail = true;
      }

    });
    /*this.user.password = ''; //gerer ici des erreurs
    this.user.username = '';*/

    this._isAuthenticated = false;
    //event.stopPropagation(); //pour eviter le rechargement de la page, c'est ce qui sera souhaité
  }

  subscribe(value: User) {
    //event.preventDefault();

    console.log("user.component subscribe submit");
    //On effectue une requête http pour créer le nouvel utilisateur via le service user
    this._myService.registerUser(this.user).then(
      () => {
        this.tokenjwt = localStorage.getItem('token');
        this._isAuthenticated = true;
        this.user.username = localStorage.getItem('username');

        console.log("CreateUser OK: User=" +localStorage.getItem('username')+ " &token=" +localStorage.getItem('token'));
        //this.tokenjwt = localStorage.getItem('token');
        //console.log("user.comp res.title" +res.title);
        //console.log("user.comp localStorage-username" + this.user.username);
        this.router.navigate(['/user/home']);
        //location.reload();
    });

    //event.stopPropagation();
  }

}
