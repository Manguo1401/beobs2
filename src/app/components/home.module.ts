import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

import { HomeRoutes } from './home.routes'

import { HomeMainPage } from './home_main_page.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes
  ],
  declarations: [
    HomeMainPage
  ],
  providers: [
    
  ]
})

export class HomeModule {}