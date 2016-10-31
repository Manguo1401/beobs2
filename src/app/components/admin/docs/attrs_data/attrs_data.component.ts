import { Component } from '@angular/core'

import { Category } from './../../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../../services/attrs_data/categories.service'

declare var $:any;

@Component({
	selector: 'my-attrs-data-admin-component',
	templateUrl: 'attrs_data.component.html',
	styleUrls: [
		'attrs_data.style.css'
	]
})


export class AttrsDataAdminComponent {
	newCategory: string;
	selectedCategory: Category;

	categories: Category[] = [];

	constructor(
		private serviceCategories: ServiceCaterogiesModules
	) {}

	ngOnInit(): void {
		this.serviceCategories.getCategories()
		.then(categories => this.categories = categories);
	}

	addCategory(newCat:any) {
		//On enlève les espaces blanc s'il y en a
		newCat = newCat.trim();

		//On regarde si newCategory a bien une valeur non nulle
		if(!newCat) {
			return ;
		}

		//On effectue une requête http pour ajouter une nouvelle catégorie via le service categories
		this.serviceCategories.createCategory(newCat)
		.then(newCat => {
			//On ajoute la catégorie à la liste actuelle
			this.categories.push(newCat)
			//On remet le champ des catégories à zéro une fois l'opération effectuée
			this.newCategory = ''
		},
		function() {
			console.log('il y a un problème');
		})
	}

	editCategory(cat: any) {
		this.selectedCategory = cat;

		$('.page.dimmer:first')
			.dimmer('toggle')
		;
	}

	validateEditCategory(editedCategory:any) {
		this.serviceCategories.editCategory(editedCategory)
		.then(() => {
			this.selectedCategory = null;
		});

		$('.page.dimmer:first')
			.dimmer('toggle')
		;
	}

	cancelEditCategory() {
		this.selectedCategory = null;
		this.serviceCategories.getCategories()
		.then(categories => {
			this.categories = categories
			$('.page.dimmer:first')
				.dimmer('toggle')
			;
		});


	}

	deleteCategory(category: Category) {
		this.serviceCategories.deleteCategory(category._id)
		.then(() => {
			this.categories = this.categories.filter(cat => cat != category);
		}, (err) => console.log('La catégorie n\'a pas été supprimée'));
	}
}
