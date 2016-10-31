import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomePageOrg } from './home_page_org.component'
import { DataChoicePage } from './data_choice/data_choice_page.component'
import { HomeOrgComponent } from './home/home.component'

import { SubscribeOrgPage } from './subscribe/subscribe_org.component'


import { AttrsDataChoiceOrgComponent } from './data_choice/attrs_data/attrs_data_choice.component'
import { LocationChoiceOrgComponent } from './data_choice/location_data/location_choice.component'
import { SpeciesChoiceOrgComponent } from './data_choice/species_data/species_choice.component'


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
