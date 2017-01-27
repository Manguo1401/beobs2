import { Component } from '@angular/core'

@Component ({
	selector: 'my-user-home-component',
	templateUrl : 'user_home.component.html',
	styleUrls: ['../user_banner.css']
})

export class UserHomeComponent {
	username = localStorage.getItem('username');
  token = localStorage.getItem('token');
}
