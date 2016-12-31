import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { FormsModule }    from '@angular/forms'

//Routes de la session utilisateur
import { UserRoutes } from './user.routes'

//Compnsants pour les utilisateurs
import { UserHomePage } from './user_home.page'

//Composant pour la page d'accueil des utilisateurs
import { UserHomeComponent } from './home/user_home.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UserRoutes
	],
	declarations: [
		UserHomePage,
		UserHomeComponent
	],
	providers: [

	]
})

export class UserModule {}
