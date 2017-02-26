import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'


//import {HomeModule} from '../../home.module'
//Routes de la gestion des nouvelles observations
import { NewObservationRoutes } from './new_observation.routes'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

//Chargement des components associés
import { NewObservationComponent } from './new_observation.component'
import { TripSelectorComponent } from './trip_selector/trip_selector.component'
import { SpeciesSelectComponent } from './species_selection/species_selection.component'
import { MediaUploadComponent } from './media_upload/media_upload.component'
import { LocalisationSelectorComponent } from './localisation_selector/localisation_selector.component'
import { AttrsSelectorComponent } from './attrs_selector/attrs_selector.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		//HomeModule,
		NewObservationRoutes
	],
	declarations: [
		SpeciesSelectComponent,
		NewObservationComponent,
		TripSelectorComponent,
		MediaUploadComponent,
		LocalisationSelectorComponent,
		AttrsSelectorComponent
	],
	providers: [

	]
})

export class NewObservationModule {}
