import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { UserHomePage } from './user_home.page'
import { UserHomeComponent } from './home/user_home.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'user',
			component: UserHomePage,
			children: [{
				path:'home',
				component: UserHomeComponent
			},{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			}]
		}])
	],
	exports: [
		RouterModule
	]
})


export class UserRoutes { }
