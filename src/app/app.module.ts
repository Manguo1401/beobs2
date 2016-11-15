import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from "@angular/http"
/*import { NgSemanticModule } from 'ng-semantic';*/

import { AppComponent }  from './app.component'


import { PageNotFound } from './components/page_not_found.component'

//Importation des routes
import { AppRoutes } from "./app.routes"
import { HomeModule } from "./components/home.module"
import { OrgModule } from "./components/org/org.module"
import { AdminModule } from "./components/admin/admin.module"
import { TodoRoutes } from "./components/todo-app/todo.routes"


//Importation des services
import { ServiceCaterogiesModules } from "./services/attrs_data/categories.service"
import { ServiceAttrsData } from "./services/attrs_data/attrs_data.service"
import { ServiceOrganismsModules } from "./services/org/org.service"

//Importation des filtres
/*import { CategoryFilterPipe } from './pipes/attrs_data/category_filter.pipe'*/


@NgModule({
    imports: [
        BrowserModule,
/*        NgSemanticModule,*/
        HttpModule,
        HomeModule,
        OrgModule,
        AdminModule,
        TodoRoutes,
        AppRoutes //A placer après les modules annexes
    ],
    providers: [
        ServiceCaterogiesModules,
        ServiceAttrsData,
        ServiceOrganismsModules
    ],
    declarations: [
        /*CategoryFilterPipe,*/
        AppComponent,
        PageNotFound
    ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
