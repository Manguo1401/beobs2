import { Component, OnInit } from '@angular/core'


import * as ol from 'openlayers';

@Component ({
	selector: 'my-localisation-selector',
	templateUrl: 'localisation_selector.component.html',
	styleUrls: ['localisation_selector.style.scss', '../../../css/utils.style.scss']
})


export class LocalisationSelectorComponent implements OnInit  {
	ol: any;
    ngOnInit(): void {

        var geojsonObject = {
            'type': 'FeatureCollection',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'EPSG:900913'
                }
            },
            'features': [{
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-550901.6765791996, 6229025.580353481], 
                                    [-346050.4407749274, 6234529.046390007], 
                                    [-401448.4627783958, 6064353.62472568], 
                                    [-543034.0480185983, 6100431.902076292], 
                                    [-670225.2630851289, 6162193.020930737]]]
                },
                'properties': {
                    'name': 'fast_banana'
                }
            }]
        };

        let geometryStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: [200, 200, 200, 1], 
                width: 2
            })
        });

        var Esri_WorldPhysical = new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        let vectorSource = new ol.source.Vector();
        let vectorLayer = new ol.layer.Vector({    source:vectorSource });

        let vectorSource2 = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
        });
        let vectorLayer2 = new ol.layer.Vector({    
            source:vectorSource2,
            style:geometryStyle
        });

        var map = new ol.Map({
            layers: [
                Esri_WorldPhysical,
                vectorLayer,
                vectorLayer2
            ],
            target: 'map',
            view: new ol.View({

            	projection: 'EPSG:900913',
                center: [-457342.75395814446, 6150754.063389432],
                zoom: 8
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
