import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { AdminRoutes } from './admin.routes'

//Compnsants pour le panneau d'administration
import { HomePageAdmin } from './home_page_admin.component'
import { DocsAdminPage } from './docs/docs_page.component'

import { HomeAdminComponent } from './home/home_admin.component'
import { AttrsDataAdminComponent } from './docs/attrs_data/attrs_data.component'
import { SelectedAttrsData } from './docs/attrs_data/selected_attrs_data.component'
import { SpeciesManagementComponent } from './docs/species/species_management.component'

import { CategoryFilterPipe } from './../../pipes/attrs_data/category_filter.pipe'


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
		SpeciesManagementComponent,
		SelectedAttrsData,
		CategoryFilterPipe
	],
	providers: [
		
	]
})

export class AdminModule {}