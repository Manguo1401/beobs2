import { Component } from '@angular/core'

@Component ({
  selector: 'my-user-menu-component',
  templateUrl : 'user_menu.component.html',
  styleUrls: ['./user_menu.style.css']
})

export class UserMenuComponent {
  username = localStorage.getItem('username');
  token = localStorage.getItem('token');
}
