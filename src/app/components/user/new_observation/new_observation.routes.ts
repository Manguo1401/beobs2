import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NewObservationComponent } from './new_observation.component'

import { SpeciesSelectComponent } from './species_selection/species_selection.component'
import { TripSelectorComponent } from './trip_selector/trip_selector.component'
import { LocalisationSelectorComponent } from './localisation_selector/localisation_selector.component'
import { AttrsSelectorComponent } from './attrs_selector/attrs_selector.component'
import { MediaUploadComponent } from './media_upload/media_upload.component'


@NgModule({
	imports: [
		RouterModule.forChild([{
			path: '',
			component: NewObservationComponent,
			children: [{
				path: 'select_species',
				component: SpeciesSelectComponent
			},{
				path: 'select_trip',
				component: TripSelectorComponent
			},{
				path: 'select_localisation',
				component: LocalisationSelectorComponent
			},{
				path: 'upload_media',
				component: MediaUploadComponent
			},{
				path: 'select_attrs',
				component: AttrsSelectorComponent
			},{
				path: '',
				redirectTo: 'select_trip',
				pathMatch: 'full'
			}]
		}])
	],
	exports: [
		RouterModule
	]
})


export class NewObservationRoutes { }
