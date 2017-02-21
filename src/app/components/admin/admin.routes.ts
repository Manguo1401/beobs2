import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomePageAdmin } from './home_page_admin.component'

import { HomeAdminComponent } from './home/home_admin.component'
import { DocsAdminPage } from './docs/docs_page.component'
import { AttrsDataAdminComponent } from './docs/attrs_data/attrs_data.component'
import { SpeciesManagementComponent } from './docs/species/species_management.component'

//Page builder
import { BuilderCompPage } from './builder_comp/builder_comp.page'

@NgModule({
	imports: [
		RouterModule.forChild([{
			path: 'admin',
			component: HomePageAdmin,
			children: [{
				path: 'home',
				component: HomeAdminComponent
			},{
				path: 'docs',
				component: DocsAdminPage,
				children: [{
					path: 'attrs_data',
					component: AttrsDataAdminComponent
				},{
					path: '',
					redirectTo: 'attrs_data',
					pathMatch: 'full'
				},{
					path: 'species_management',
					component: SpeciesManagementComponent
				}]
			},{
				path: 'builder_comp',
				component: BuilderCompPage
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


export class AdminRoutes { }
