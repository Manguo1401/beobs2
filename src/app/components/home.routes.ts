import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component'
import { ConnectComponent } from "./connect/connect.component"


@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'home',
			component: HomeComponent
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
