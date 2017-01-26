import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ConnectComponent } from "../users/connect/connect.component"

//Routes de la session utilisateur
import { UserRoutes } from './user.routes'

//Importation des modules enfants
import { NewObservationModule } from './new_observation/new_observation.module'

//Compnsants pour les utilisateurs
import { UserHomePage } from './user_home.page'

//Composant pour la page d'accueil des utilisateurs
import { UserHomeComponent } from './home/user_home.component'

//Composant my_observations
import { MyObservationsComponent } from './my_observations/my_observations.component'
import { MyObsTestComponent } from './my_observations/my_obs_test.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		NewObservationModule,
		UserRoutes
	],
	declarations: [
		UserHomePage,
		UserHomeComponent,
		ConnectComponent,
		MyObservationsComponent,
		MyObsTestComponent
	],
	providers: [

	]
})

export class UserModule {}
