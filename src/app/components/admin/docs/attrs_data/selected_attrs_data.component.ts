import { Component, Input, DoCheck, Output, EventEmitter } from '@angular/core'

import { ServiceAttrsData } from './../../../../services/attrs_data/attrs_data.service'

import { Category } from './../../../../objects/categorie'
import { AttrData } from './../../../../objects/attr_data'


@Component ({
	selector: 'my-selected-attrs-data',
	templateUrl: 'selected_attrs_data.component.html'
})

export class SelectedAttrsData implements DoCheck {
	@Input() category: Category
	@Input() catLength: number
	oldCatLength: number = this.catLength
	attrsData: AttrData[] = []
	newAttrData: any = {}
	selectedAttrData: any
	@Output() previsualiseAttrData = new EventEmitter();


	ngDoCheck() {
		if ( this.catLength !== this.oldCatLength) {
			this.serviceAttrData.getAttrsData()
			.then(attrsData => {
				this.attrsData = attrsData
				this.oldCatLength = this.catLength;
			});
		}		
	}

	constructor(
		private serviceAttrData: ServiceAttrsData
	) {}

	addAttrData(newAttrData, cat) {
		let catId = cat._id // On récupère l'id de la catégorie sélectionnée

		newAttrData.name = newAttrData.name.trim(); //On enlève les espaces blanc s'il y en a
		newAttrData.component = newAttrData.component.trim(); //On enlève les espaces blanc s'il y en a

		//On regarde si newAttrData a bien une valeur non nulle
		if(!newAttrData.name || !newAttrData.component ) {
			return ;
		}

		//On effectue une requête http pour ajouter une nouvelle donnée attributaire via le service attr
		this.serviceAttrData.createAttrData(newAttrData, catId)
		.then(newAttrData => {
			this.attrsData.push(newAttrData) //On ajoute la catégorie à la liste actuelle
			this.newAttrData = {}//On remet le'objet newAttrData à zéro
		},
		function() {
			console.log('Il y a un problème');
		})
	}

	editAttrData(attrData: any) {
		this.selectedAttrData = attrData;
	}

	validateEditAttrData(editedAttrData:any) {
		this.serviceAttrData.editAttrData(editedAttrData)
		.then(() => {
			this.selectedAttrData = null;
		});
	}

	cancelEditAttrData() {
		this.selectedAttrData = null;
		this.serviceAttrData.getAttrsData()
		.then(attrsData => {
			this.attrsData = attrsData
		});
	}

	delAttrData(attrData: AttrData) {
		this.serviceAttrData.deleteAttrData(attrData._id)
		.then(() => {
			this.attrsData = this.attrsData.filter(attr => attr != attrData);
		}, (err) => console.log('La donnée attributaire n\'a pas été supprimée'));
	}

	addToCategory(attrData: AttrData, category: Category) {
		this.serviceAttrData.addToCategory(attrData, category)
		.then(() => {
			attrData.category_id = category._id;
		})
	}

	selectAttrData(attrData: AttrData) {
		this.selectedAttrData = attrData;
		this.previsualiseAttrData.emit({
			selectedAttrData: this.selectedAttrData
		})
	}
}