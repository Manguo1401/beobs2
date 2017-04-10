import { Component } from '@angular/core'

@Component ({
  selector: 'my-user-menu-component',
  templateUrl : 'user_menu.component.html',
  styleUrls:
  [
    '../../css/button.style.scss'
  ]
})

export class UserMenuComponent {
  username = localStorage.getItem('username');
  token = localStorage.getItem('token');
}
