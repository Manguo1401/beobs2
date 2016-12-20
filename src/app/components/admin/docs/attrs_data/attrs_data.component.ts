import { Component } from '@angular/core'

import { Category } from './../../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../../services/attrs_data/categories.service'

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
	selectedAttrData;
	categories: Category[] = [];

	constructor(
		private serviceCategories: ServiceCaterogiesModules
	) {}

	ngOnInit(): void {
		this.serviceCategories.getCategories()
		.then(categories => {
			this.categories = categories
			this.checkCategoryId(categories)
		});
	}

	selectCategory(cat: any) {
		this.selectedCategory = cat;
	}

	addCategory(newCat:any) {
		

		//On regarde si newCategory a bien une valeur non nulle
		if(!newCat) {
			return ;
		}
		var rebuild ;
		newCat = newCat.trim(); //On enlève les espaces blanc s'il y en a

		if(!newCat) {
			return ;
		}

		//On effectue une requête http pour ajouter une nouvelle catégorie via le service categories
		this.serviceCategories.createCategory(newCat)
		.then(newCat => {
			this.categories.push(newCat) //On ajoute la catégorie à la liste actuelle
			this.newCategory = '' //On remet le champ des catégories à zéro une fois l'opération effectuée
		},
		function() {
			console.log('Il y a un problème');
		})
	}

	editCategory(cat: any) {
		this.selectedCategory = cat;
	}

	validateEditCategory(editedCategory:any) {
		this.serviceCategories.editCategory(editedCategory)
		.then(() => {
			this.selectedCategory = null;
		});
	}

	cancelEditCategory() {
		this.selectedCategory = null;
		this.serviceCategories.getCategories()
		.then(categories => {
			this.categories = categories
		});
	}

	deleteCategory(category: Category) {
		this.serviceCategories.deleteCategory(category._id)
		.then(() => {
			this.categories = this.categories.filter(cat => cat != category);
			this.serviceCategories.checkCategoryId(this.categories)
			.then(() => {
				return null;
			});
		}, (err) => console.log('La catégorie n\'a pas été supprimée'));
	}

	checkCategoryId(categories) {
		this.serviceCategories.checkCategoryId(categories)
		.then(() => {
			console.log("Données attributaires mis à jour");
		})
	}

	previsualiseAttrData(event) {
		this.selectedAttrData = event.selectedAttrData;
	}
}
