import { Component, OnInit } from '@angular/core'


import * as ol from 'openlayers';

@Component ({
	selector: 'my-localisation-selector',
	templateUrl: 'localisation_selector.component.html',
	styleUrls: ['localisation_selector.style.css']
})


export class LocalisationSelectorComponent implements OnInit  {
	ol: any;
    ngOnInit(): void {

        var Esri_WorldPhysical = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        let vectorSource = new ol.source.Vector();
        let vectorLayer = new ol.layer.Vector({    source:vectorSource });

        var map = new ol.Map({
            layers: [
                Esri_WorldPhysical,
                vectorLayer
            ],
            target: 'map',
            view: new ol.View({

            	projection: 'EPSG:900913',
                center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
                zoom: 5
            })
        });

        // Création de la couche permettant de créer un vecteur
        var draw = new ol.interaction.Draw({
            source: vectorSource,
            type: "Circle"
        });
        //Suppression du polygone si un nouveau est créé
        draw.on('drawstart', function (e) {
            vectorSource.clear();
        });

        //Intégration de la couche sur la carte
        map.addInteraction(draw);
    }
}