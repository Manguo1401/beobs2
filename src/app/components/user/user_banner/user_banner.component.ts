import { Component } from '@angular/core'

@Component ({
	selector: 'my-user-banner-component',
	templateUrl : 'user_banner.component.html',
	styleUrls: ['./user_banner.style.css']
})

export class UserBannerComponent {
	username = localStorage.getItem('username');
  token = localStorage.getItem('token');
}
