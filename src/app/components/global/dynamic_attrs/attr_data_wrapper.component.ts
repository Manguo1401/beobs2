import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input, OnChanges, ComponentRef } from '@angular/core'

import { AttrsDataMap } from './../../../services/attrs_data/attrs_data_comp.map'

@Component({
	selector: 'my-attr-data-wrapper',
	templateUrl: 'attr_data_wrapper.component.html',
	styleUrls: ['attr_data_wrapper.styles.css']
})

export class AttrDataWrapperComponent implements OnChanges {

	@Input() attrData: any;

	@ViewChild('dynamicComponent', {read: ViewContainerRef}) dynamicComponent: ViewContainerRef;
	cmpRef: ComponentRef<Component>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private attrsDataMap: AttrsDataMap
	) {}

	ngOnChanges() {
		//Vérification que la donnée attributaire est définie quand il y a un changement
		if(this.attrData !== undefined) {
			//Vérification que cette donnée dispose d'un champ component
			if(this.attrData.component == undefined) {
				return alert("Cette donnée attributaire ne dispose pas de nom de composant dans son JSON");
			}

			//Suppression de l'ancien attribut
			this.dynamicComponent.clear();

			//Récupération du composant lié à la donnée attributaire via la map
			let comp = this.attrsDataMap.getComp(this.attrData.component);

			//construction de la prévisualisation de l'attribut sélectionné
			let factory = this.componentFactoryResolver.resolveComponentFactory(comp);
			this.cmpRef = this.dynamicComponent.createComponent(factory, 0);

			let instance: any = this.cmpRef.instance;

			instance.props = 'comme on !!!!';

			this.cmpRef.changeDetectorRef.detectChanges();
		}

	}

	private showComponent() {

	}

}
