import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs/Rx'

import { User } from '../../objects/user'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class UserService {
  private _headers = new Headers({'Content-Type': 'application/json'});

  private _token: string;
  private _username: string;
  // Observable string Sources //recupérer le username si la personne s'est déjà loggé (token valid)
  private _usernameSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // Observable string streams
  public username$: Observable<string> = this._usernameSource.asObservable();

  constructor(private http: Http){
    this._token = localStorage.getItem('token');
    this._username = localStorage.getItem('username');
    this._headers.append('authorization', this._token);
    this._usernameSource.next(localStorage.getItem('username'));
  }

  public registerUser(newUser: User): Promise<void> {
    console.log("user.service createUser"+ JSON.stringify(newUser));

    return this.http.post('user/create', JSON.stringify(newUser), { headers: this._headers })
      .toPromise()
      .then(res =>
        {
          console.log("service res= "+res.json());
            this._headers = new Headers({
            'Content-Type': 'application/json',
            'authorization': res.json().token
          });
          this._token = res.json().token;
          this._username = res.json().data;
          //console.log(res.json().token);

          this._usernameSource.next(res.json().data);
          //console.log("service token" + this._token);
          localStorage.setItem('token', this._token);
          localStorage.setItem('username', this._username);
          //console.log("localStorage.getItem('token')" + localStorage.getItem('token'));
        })
      .catch(this.handleError);
  }


  public login(username : string, password: string) : Promise<void> {
    return this.http.post('/user/login',
      JSON.stringify({username: username, password: password}),
      {headers: this._headers})
      .toPromise().then(res =>
      {
        console.log("userservice LoginServer resolved: user= " + res.json().data);
        this._headers = new Headers({
          'Content-Type': 'application/json',
          'authorization': res.json().token
        });
        this._token = res.json().token;
        this._username = res.json().data;
        //console.log(res.token);

        this._usernameSource.next(res.json().data);
        //console.log("service token" + this._token);
        localStorage.setItem('token', this._token);
        localStorage.setItem('username', this._username);
        console.log("localStorage.getItem('token')" + localStorage.getItem('token'));
      })
    .catch(this.handleError);
  }

  public loginwithObservable(username : string, password: string) : void {
    this.http.post('/user/login',
      JSON.stringify({username: username, password: password}),
      {headers: this._headers}).map(res => res.json())
      .subscribe(
      data => {
        //this._headers.append('authorization', data.token); A verifier si ca marche
        this._headers = new Headers({
          'Content-Type': 'application/json',
          'authorization': data.token
        });
        this._token = data.token;
        this._username = data.data;
        //console.log(data.token);

        this._usernameSource.next(data.data);
        //console.log("service token" + this._token);
        localStorage.setItem('token', this._token);
        localStorage.setItem('username', this._username);
        console.log("localStorage.getItem('token')" + localStorage.getItem('token'));
      },
      err => { console.log(err) }
    );
  }

  public logout(){
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    this._usernameSource = new BehaviorSubject<string>('');
  }

  public getInfo() : Promise<string> {
    return this.http.get('/search',
      {headers: this._headers}
    ).toPromise()
      .then ( data => { return data.json().message; })
      .catch(err => console.log(err) );
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
