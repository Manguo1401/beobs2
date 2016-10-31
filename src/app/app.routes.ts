import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PageNotFound } from './components/page_not_found.component'

@NgModule({
	imports: [
		RouterModule.forRoot([{
			path: '**',
			component: PageNotFound
		}])
	],
	exports: [
		RouterModule
	]
})

export class AppRoutes {}