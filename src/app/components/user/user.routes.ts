import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { UserHomePage } from './user_home.page'
import { UserHomeComponent } from './home/user_home.component'
import { NewObservationComponent } from './new_observation/new_observation.component'

import { NewObservationModule } from './new_observation/new_observation.module'
//Composant my_observations
import { MyObservationsComponent } from './my_observations/my_observations.component'
import { MyObsTestComponent } from './my_observations/my_obs_test.component'
//Composant Fil d'actu
import { NewsComponent } from './news/news.component'
//Composants livre taxonomique et le guide d'identification des espèces
import { TaxonomicBookComponent } from './taxonomic_book/taxonomic_book.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'user',
			component: UserHomePage,
			children: [{
				path:'home',
				component: UserHomeComponent
			},{
				path: 'new_observation',
				loadChildren: () => NewObservationModule
			},{
				path:'my_observations',
				component: MyObservationsComponent,
			},{
				path:'fil',
				component: NewsComponent,
			},{
				path: 'taxonomic_book',
				component: TaxonomicBookComponent
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
