import { Router } from '@angular/router';
import { Component } from '@angular/core'

@Component ({
	selector: 'my-user-banner-component',
	templateUrl : 'user_banner.component.html',
	styleUrls: ['./user_banner.style.css']
})

export class UserBannerComponent {
	username = localStorage.getItem('username');
  token = localStorage.getItem('token');


  /*
  Redirection par fonction fonctionne bien avec (click)="redirect('/organisme/home')" dans un div mais RouterLink fait la meme chose très bien
  constructor(
    private router: Router
    ){}

  redirect(pagename: string) {
    this.router.navigate([''+pagename]);
  }*/
}
