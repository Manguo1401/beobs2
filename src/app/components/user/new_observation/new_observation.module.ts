import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

//Routes de la gestion des nouvelles observations
import { NewObservationRoutes } from './new_observation.routes'

//Chargement des components associés
import { NewObservationComponent } from './new_observation.component'
import { SpeciesSelectComponent } from './species_selection/species_selection.component'


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NewObservationRoutes
	],
	declarations: [
		SpeciesSelectComponent,
		NewObservationComponent
	],
	providers: [

	]
})

export class NewObservationModule {}
