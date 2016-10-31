import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { OrgRoutes } from './org.routes'

//Compnsants pour les organismes
import { HomePageOrg } from './home_page_org.component'
import { HomeOrgComponent } from './home/home.component'
import { DataChoicePage } from './data_choice/data_choice_page.component'
import { AttrsDataChoiceOrgComponent } from './data_choice/attrs_data/attrs_data_choice.component'
import { LocationChoiceOrgComponent } from './data_choice/location_data/location_choice.component'
import { SpeciesChoiceOrgComponent } from './data_choice/species_data/species_choice.component'
import { SubscribeOrgPage } from './subscribe/subscribe_org.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		OrgRoutes
	],
	declarations: [
		HomePageOrg,
		HomeOrgComponent,
		DataChoicePage,
		AttrsDataChoiceOrgComponent,
		LocationChoiceOrgComponent,
		SpeciesChoiceOrgComponent,
		SubscribeOrgPage
	],
	providers: [

	]
})

export class OrgModule {}
