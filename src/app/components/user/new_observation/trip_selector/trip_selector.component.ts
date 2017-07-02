import { Component, AfterViewInit, OnInit } from "@angular/core"

import * as ol from 'openlayers';

@Component ({
	selector: "my-trip-selector",
	templateUrl: 'trip_selector.component.html',
	styleUrls: ['trip_selector.style.css', '../../../css/utils.style.scss']
})

export class TripSelectorComponent implements AfterViewInit, OnInit {
	ol: any;
	public trip_map: any;

	ngAfterViewInit() {
		let trip_map = this.trip_map;

		$('#collapseNewTrip').on('shown.bs.collapse', function () {
			//Il faut lancer la fonction 2 fois car sinon il y a un bug de remise en forme propre de la carte
			trip_map.updateSize();
			setTimeout( function(){ trip_map.updateSize(); },200);
		});
	}

	ngOnInit(): void {


		//Chargement du fond de carte ESRI
		var Esri_WorldPhysical = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			})
		});


		let vectorSource = new ol.source.Vector();
		let vectorLayer = new ol.layer.Vector({	source:vectorSource });

		this.trip_map = new ol.Map({
			layers: [
			Esri_WorldPhysical,
			vectorLayer
			],
			target: 'trip_map',
			view: new ol.View({

				projection: 'EPSG:900913',
				center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
				zoom: 5
			})
		});

		// Création de la couche permettant de créer un vecteur
		var draw = new ol.interaction.Draw({
			source: vectorSource,
			type: "Polygon"
		});
		//Suppression du polygone si un nouveau est créé
		draw.on('drawstart', function (e) {
			vectorSource.clear();
		});

		//Intégration de la couche sur la carte
		this.trip_map.addInteraction(draw);

	}
}
