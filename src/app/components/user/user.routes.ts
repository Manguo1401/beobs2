import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { UserHomePage } from './user.page'
//import { UserHomeComponent } from './home/user_home.component'
import { NewObservationComponent } from './new_observation/new_observation.component'

import { NewObservationModule } from './new_observation/new_observation.module'
//Composant my_observations
import { MyObservationsComponent } from './my_observations/my_observations.component'

//Guide taxonomique
import { TaxonomicBookComponent } from './taxonomic_book/taxonomic_book.component'

//Identifieur d'observations
import { ObsIdentificationComponent } from './obs_identification/obs_identification.component'

//Résultats globaux
import { GlobalResultsComponent } from './global_results/global_results.component'

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
				loadChildren: 'app/components/user/new_observations/new_observation.module#NewObservationModule'
			},{
				path:'my_observations',
				component: MyObservationsComponent,
			},{
				path:'fil',
				component: NewsComponent,
			},{
				path:'taxonomic_book',
				component: TaxonomicBookComponent,
			},{
				path: 'global_results',
				component: GlobalResultsComponent
			},{
				path: 'obs_identification',
				component: ObsIdentificationComponent
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
