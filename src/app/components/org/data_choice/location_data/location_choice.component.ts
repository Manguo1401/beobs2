import { Component, AfterViewInit, OnInit } from '@angular/core'

import * as ol from 'openlayers'

@Component({
	selector: 'my-attrs-data-choice-org',
	templateUrl: 'location_choice.component.html',
	styleUrls: ['location_choice.style.css']
})

export class LocationChoiceOrgComponent implements OnInit, AfterViewInit {
	ol: any;
	clearZones: any;
	

    ngOnInit(): void {

        var Esri_WorldPhysical = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });



        let vectorSource = new ol.source.Vector();
        let vectorLayer = new ol.layer.Vector({    source:vectorSource });

        

        let orgZoneChoiceMap = new ol.Map({
            layers: [
                Esri_WorldPhysical,
                vectorLayer
            ],
            target: 'org_data_selector_map',
            view: new ol.View({

            	projection: 'EPSG:900913',
                center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
                zoom: 5
            })
        });



         ///////////////////////////////////////////
       

        var button = document.createElement('button');
		button.innerHTML = '<i class="fa fa-eraser" aria-hidden="true"></i>';
		button.setAttribute("data-toggle", "tooltip");
		button.setAttribute("data-placement", "right");
		button.setAttribute("title", "Supprimer les zones");
		button.setAttribute("id", "zoneDeteleBtn");

		

		this.clearZones = function() {
	    	vectorSource.clear();
	    }

	    let _this = this;

		button.addEventListener('click', _this.clearZones, false);

		var element = document.createElement('div');
		element.className = 'map-controller ol-unselectable ol-control';
		element.appendChild(button);

		var clearZonesBtn = new ol.control.Control({
		    element: element
		});

		orgZoneChoiceMap.addControl(clearZonesBtn);

		 ///////////////////////////////////////////

        // Création de la couche permettant de créer un vecteur
        let draw = new ol.interaction.Draw({
            source: vectorSource,
            type: "Polygon"
        });
        //Suppression du polygone si un nouveau est créé
        draw.on('drawstart', function (e) {
            
        });

        

        //Intégration de la couche sur la carte
        orgZoneChoiceMap.addInteraction(draw);
    }

    ngAfterViewInit() {
    	$(document).ready(function() {
    		$('#zoneDeteleBtn').tooltip();
    	});
    }
}