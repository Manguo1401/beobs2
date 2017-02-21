import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { AdminRoutes } from './admin.routes'

import {HomeModule} from '../home.module'
//Compnsants pour le panneau d'administration
import { HomePageAdmin } from './home_page_admin.component'
import { DocsAdminPage } from './docs/docs_page.component'

import { HomeAdminComponent } from './home/home_admin.component'
import { AttrsDataAdminComponent } from './docs/attrs_data/attrs_data.component'
import { SelectedAttrsData } from './docs/attrs_data/selected_attrs_data.component'
import { SpeciesManagementComponent } from './docs/species/species_management.component'

import { AttrDataWrapperModule } from './../global/dynamic_attrs/attr_data_wrapper.module'

import { AttrsDataMap } from './../../services/attrs_data/attrs_data_comp.map'

//Page builder
import { BuilderCompPage } from './builder_comp/builder_comp.page'


//Importation des filtres
import { CategoryFilterPipe } from './../../pipes/attrs_data/category_filter.pipe'


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HomeModule,
		AdminRoutes,
		AttrDataWrapperModule
	],
	declarations: [
		HomePageAdmin,
		HomeAdminComponent,
		DocsAdminPage,
		AttrsDataAdminComponent,
		SpeciesManagementComponent,
		SelectedAttrsData,
		CategoryFilterPipe,
		BuilderCompPage
	],
	providers: [
		AttrsDataMap
	]
})

export class AdminModule {}
