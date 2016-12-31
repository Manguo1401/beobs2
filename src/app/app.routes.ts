import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PageNotFound } from './components/page_not_found.component'
/*import { ConnectComponent } from "./components/users/connect/connect.component"
import { LogoutComponent } from "./components/users/logout/logout.component"
import { SubscribeUserComponent } from "./components/users/subscribe/subscribe_user.component"*/

@NgModule({
	imports: [
		RouterModule.forRoot([
    {
      /*path: 'login',
      component: ConnectComponent
    },{
      path: 'logout',
      component: LogoutComponent
    },{
      path: 'subscribe',
      component: SubscribeUserComponent
    },{*/
			path: '**',
			component: PageNotFound
		}])
	],
	exports: [
		RouterModule
	]
})

export class AppRoutes {}
