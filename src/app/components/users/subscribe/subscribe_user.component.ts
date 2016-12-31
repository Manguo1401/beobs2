import { Component } from '@angular/core'

import { User } from '../../../objects/user'
import { UserService } from './../../../services/user/user.service'

//declare var $:any;

@Component({
  selector: 'my-subscribe-user',
  templateUrl: 'subscribe_user.component.html',
  styleUrls: [
    ]
})


export class SubscribeUserComponent {//implements OnInit
  private newUser:User = new User();
  submitted:boolean = false;
  tokenjwt = "vide";
  private _isAuthenticated: boolean;
  //public user: User =  new User('','');

  //filesToUpload: Array<File>;

  constructor(
    private serviceUsers: UserService
  ) {
    //this.filesToUpload = [];
    this.newUser.username= "Name";
    //this.newOrg.accr= "Accr";
    //this.newOrg.desc= "Desc";
  }

  /*ngOnInit(): void {
    this.serviceUsers.username$.subscribe(
      res => {
        if(res) {
          this._isAuthenticated = true;
          this.newUser.username = res;
          console.log("ngOnInit res valid" + res);
        } else {
          this._isAuthenticated = false;
          this.newUser.username = null;
        }
      }
    )
  }*/

  test(){
    console.log("user.component test");
  }

  subscribe(value: User) {
    //event.preventDefault();

    console.log("user.component submit");
    //On effectue une requête http pour créer le nouvel organisme via le service organism
    this.serviceUsers.registerUser(this.newUser).then(
      () => {
        console.log("user.component createUser done");
        this.tokenjwt = localStorage.getItem('token');
        this.submitted = true;
        this._isAuthenticated = true;
        this.newUser.username = localStorage.getItem('username');
        //this.tokenjwt = localStorage.getItem('token');
        //console.log("user.comp res.title" +res.title);
        console.log("user.comp localStorage-username" + this.newUser.username);
    });

    //event.stopPropagation();
  }


}
