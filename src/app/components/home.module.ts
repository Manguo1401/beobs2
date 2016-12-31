import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { HomeRoutes } from './home.routes'

import { HomeMainPage } from './home_main_page.component';
import { TodoAppComponent } from './todo-app/todo-app.component'
import { ConnectComponent } from "./users/connect/connect.component"
import { LogoutComponent } from "./users/logout/logout.component"
import { SubscribeUserComponent } from "./users/subscribe/subscribe_user.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes,
  ],
  declarations: [
    HomeMainPage,

    //Todo list
    TodoAppComponent,

    //User Management
    ConnectComponent,
    LogoutComponent,
    SubscribeUserComponent,
  ],
  providers: [

  ]
})

export class HomeModule {}
