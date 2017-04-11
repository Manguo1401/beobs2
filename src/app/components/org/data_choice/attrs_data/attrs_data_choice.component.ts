import { Component } from '@angular/core'

import { Category } from './../../../../objects/categorie'

import { ServiceCaterogiesModules } from './../../../../services/attrs_data/categories.service'

@Component({
	selector: 'my-attrs-data-choice-org',
	templateUrl: 'attrs_data_choice.component.html',
	styleUrls: ['attrs_data_choice.style.css']
})

export class AttrsDataChoiceOrgComponent {
		categories: Category[] = [];

		cat: boolean = true;

		selectCat() {
			if (this.cat === true) {
				this.cat = false;
			} else {
				this.cat = true;
			}
		}

		constructor(
			private serviceCategories: ServiceCaterogiesModules
		) {}

		ngOnInit(): void {
			this.serviceCategories.getCategories()
			.then(categories => /*{*/this.categories = categories/*; console.log(categories)}*/);
		} 
}