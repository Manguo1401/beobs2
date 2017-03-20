import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeModule} from '../home.module'
//import { ConnectComponent } from "../users/connect/connect.component"

//Routes de la session utilisateur
import { UserRoutes } from './user.routes'

//Importation des modules enfants
import { NewObservationModule } from './new_observation/new_observation.module'

//Componsants pour les utilisateurs
import { UserHomePage } from './user.page'

//Composant pour la bannière utilisateur
import { UserBannerComponent } from './user_banner/user_banner.component'
//Composant pour le menu utilisateur
import { UserMenuComponent } from './user_banner/user_menu.component'

//Composant my_observations
import { MyObservationsComponent } from './my_observations/my_observations.component'

//Résultats globaux
import { GlobalResultsComponent } from './global_results/global_results.component'

//Composant Fil d'actu
import { NewsComponent } from './news/news.component'

import { TaxonomicBookComponent } from './taxonomic_book/taxonomic_book.component'

//Le component d'identification des observations
import { ObsIdentificationComponent } from './obs_identification/obs_identification.component'

//Import de chartjs pour les graphiques
import { ChartsModule } from 'ng2-charts/ng2-charts'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		HomeModule,
		NewObservationModule,
		ChartsModule,
		UserRoutes
	],
	declarations: [
		UserHomePage,
		UserBannerComponent,
		UserMenuComponent,
		//ConnectComponent,
		MyObservationsComponent,
		NewsComponent,
		TaxonomicBookComponent,
		GlobalResultsComponent,
		ObsIdentificationComponent
	],
	exports: [
    /*UserBannerComponent,
    UserMenuComponent*/
  ],
	providers: [

	]
})

export class UserModule {}
