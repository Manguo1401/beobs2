import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { AdminRoutes } from './admin.routes'

//Compnsants pour le panneau d'administration
import { HomePageAdmin } from './home_page_admin.component'
import { DocsAdminPage } from './docs/docs_page.component'

import { HomeAdminComponent } from './home/home_admin.component'
import { AttrsDataAdminComponent } from './docs/attrs_data/attrs_data.component'
import { SpeciesManagementComponent } from './docs/species/species_management.component'


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AdminRoutes
	],
	declarations: [
		HomePageAdmin,
		HomeAdminComponent,
		DocsAdminPage,
		AttrsDataAdminComponent,
		SpeciesManagementComponent
	],
	providers: [
		
	]
})

export class AdminModule {}