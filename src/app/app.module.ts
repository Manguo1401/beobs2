import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from "@angular/http"

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component'

import { PageNotFound } from './components/page_not_found.component'

//Importation des routes
import { AppRoutes } from "./app.routes"
import { TodoRoutes } from "./components/todo-app/todo.routes"
import { HomeModule } from "./components/home.module"
import { UserModule } from './components/user/user.module'
import { OrgModule } from "./components/org/org.module"
import { AdminModule } from "./components/admin/admin.module"

//import { MainMenuComponent } from './components/main_menu.component'

//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

//Importation des services
import { ServiceCaterogiesModules } from "./services/attrs_data/categories.service"
import { ServiceAttrsData } from "./services/attrs_data/attrs_data.service"
import { ServiceOrganismsModules } from "./services/org/org.service"

import { UserService } from './services/user/user.service'
/*import { ConnectComponent } from "./components/users/connect/connect.component"
import { LogoutComponent } from "./components/users/logout/logout.component"
import { SubscribeUserComponent } from "./components/users/subscribe/subscribe_user.component"*/


//Importation des filtres
/*import { CategoryFilterPipe } from './pipes/attrs_data/category_filter.pipe'*/

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        HttpModule,
        HomeModule,
        UserModule,
        OrgModule,
        AdminModule,
        //todo list route,
        //TodoRoutes,
        AppRoutes //A placer après les modules annexes
    ],
    providers: [
        ServiceCaterogiesModules,
        ServiceAttrsData,
        ServiceOrganismsModules,
        UserService
    ],
    declarations: [
        /*CategoryFilterPipe,*/
        AppComponent,
        //MainMenuComponent,
        /*//User Management
        ConnectComponent,
        LogoutComponent,
        SubscribeUserComponent,*/
        PageNotFound
    ],

    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
