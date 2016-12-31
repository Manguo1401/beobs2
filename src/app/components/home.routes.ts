import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeMainPage } from './home_main_page.component'
import { ConnectComponent } from "./users/connect/connect.component"
import { LogoutComponent } from "./users/logout/logout.component"
import { SubscribeUserComponent } from "./users/subscribe/subscribe_user.component"

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'home',
			component: HomeMainPage
		},{
      path: 'login',
      component: ConnectComponent
    },{
      path: 'logout',
      component: LogoutComponent
    },{
      path: 'subscribe',
      component: SubscribeUserComponent
    },{
			path: '',
			redirectTo: 'home',
			pathMatch: 'full'
		}])
	],
	exports: [
		RouterModule
	]
})

export class HomeRoutes {}
