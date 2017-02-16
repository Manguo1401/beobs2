import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { UserHomePage } from './user.page'
//import { UserHomeComponent } from './home/user_home.component'
import { NewObservationComponent } from './new_observation/new_observation.component'

import { NewObservationModule } from './new_observation/new_observation.module'
//Composant my_observations
import { MyObservationsComponent } from './my_observations/my_observations.component'

//Composant Fil d'actu
import { NewsComponent } from './news/news.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'user',
			component: UserHomePage, ////NOT USED
			children: [{
			/*	path:'home',
				component: UserHomeComponent //NOT USED
			},{*/
				path: 'new_observation',
				loadChildren: () => NewObservationModule
			},{
				path:'my_observations',
				component: MyObservationsComponent,
			},{
				path:'fil',
				component: NewsComponent,
			},
				/*children: [{
					path: 'observation_ongoing',
					component: ObservationOnGoingComponent
				},{
					path: 'trophes',
					component: TrophésComponent
				},{
					path: '',
					redirectTo: 'attrs_data',
					pathMatch: 'full'
				}]*/
			{
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
