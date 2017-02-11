import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { HomeRoutes } from './home.routes'

import { HomeComponent } from './home.component';
//import { TodoAppComponent } from './todo-app/todo-app.component'
import { ConnectComponent } from './connect/connect.component'


//Componsants pour les utilisateurs
//import { UserHomePage } from './user/user_home.page'
import { MainMenuComponent } from './main_menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes,
  ],
  declarations: [
    //MainMenu
    MainMenuComponent,
    //HomePage,
    HomeComponent,

    //Todo list
    //TodoAppComponent,

    //User Management
    ConnectComponent,
  ],
  exports: [
    MainMenuComponent,
    ConnectComponent
  ],
  providers: [

  ]
})

export class HomeModule {}
