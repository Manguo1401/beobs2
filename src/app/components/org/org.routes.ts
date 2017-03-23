import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomePageOrg } from './org.page'
import { DataChoicePage } from './data_choice/data_choice_page.component'
import { HomeOrgComponent } from './home/home.component'

import { SubscribeOrgPage } from './subscribe/subscribe_org.component'
import { PostulerOrgComponent } from './postuler/postuler.component'
import { MemberManagementComponent } from './member_management/member_management.component'

import { AttrsDataChoiceOrgComponent } from './data_choice/attrs_data/attrs_data_choice.component'
import { LocationChoiceOrgComponent } from './data_choice/location_data/location_choice.component'
import { SpeciesChoiceOrgComponent } from './data_choice/species_data/species_choice.component'

import { PresentationOrgComponent } from './information/presentation/presentation.component'
import { SearchedDataOrgComponent } from './information/searched_data/searched_data.component'
import { MembersOrgComponent } from './information/members/members.component'


@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'organisme',
			component: HomePageOrg,
			children: [{
				path: 'home',
				component: HomeOrgComponent
			},{
				path: 'data_choice',
				component: DataChoicePage,
				children: [{
					path: 'attrs_data',
					component: AttrsDataChoiceOrgComponent
				},{
					path: 'location',
					component: LocationChoiceOrgComponent
				},{
					path: 'species',
					component: SpeciesChoiceOrgComponent
				},{
					path: '',
					redirectTo: 'attrs_data',
					pathMatch: 'full'
				}]
			},{
				path: 'subscribe',
				component: SubscribeOrgPage
			},{
				path: 'presentation',
				component: PresentationOrgComponent
			},{
				path: 'recherche_zone',
				component: SearchedDataOrgComponent
			},{
				path: 'member',
				component: MembersOrgComponent
			},{
				path: 'postuler',
				component: PostulerOrgComponent
			},{
				path: 'member_management',
				component: MemberManagementComponent
			},{
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


export class OrgRoutes { }
