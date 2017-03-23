import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import {HomeModule} from '../home.module'

import { OrgRoutes } from './org.routes'

//Componsants pour les utilisateurs
//import { UserHomePage } from '../user/user_home.page'

//banner
import { OrgBannerComponent } from './org_banner/org_banner.component'
import { OrgMenuComponent } from './org_banner/org_menu.component'

//Compnsants pour les organismes
import { HomePageOrg } from './org.page'
import { HomeOrgComponent } from './home/home.component'
import { DataChoicePage } from './data_choice/data_choice_page.component'
import { AttrsDataChoiceOrgComponent } from './data_choice/attrs_data/attrs_data_choice.component'
import { LocationChoiceOrgComponent } from './data_choice/location_data/location_choice.component'
import { SpeciesChoiceOrgComponent } from './data_choice/species_data/species_choice.component'
import { SubscribeOrgPage } from './subscribe/subscribe_org.component'
import { PostulerOrgComponent } from './postuler/postuler.component'
import { MemberManagementComponent } from './member_management/member_management.component'
import { PresentationOrgComponent } from './information/presentation/presentation.component'
import { SearchedDataOrgComponent } from './information/searched_data/searched_data.component'
import { MembersOrgComponent } from './information/members/members.component'


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HomeModule,
		OrgRoutes
	],
	declarations: [
		OrgBannerComponent,
		OrgMenuComponent,
		//UserHomePage,
		HomePageOrg,
		HomeOrgComponent,
		DataChoicePage,
		AttrsDataChoiceOrgComponent,
		LocationChoiceOrgComponent,
		SpeciesChoiceOrgComponent,
		SubscribeOrgPage,
		PostulerOrgComponent,
		MemberManagementComponent,
		PresentationOrgComponent,
		SearchedDataOrgComponent,
		MembersOrgComponent
	],
	providers: [

	]
})

export class OrgModule {}
