import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NewObservationComponent } from './new_observation.component'

import { SpeciesSelectComponent } from './species_selection/species_selection.component'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: '',
			component: NewObservationComponent,
			children: [{
				path: 'select_species',
				component: SpeciesSelectComponent
			},{
				path: '',
				redirectTo: 'select_species',
				pathMatch: 'full'
			}]
		}])
	],
	exports: [
		RouterModule
	]
})


export class NewObservationRoutes { }
