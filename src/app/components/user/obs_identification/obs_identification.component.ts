import { Component, OnInit } from '@angular/core'

import * as ol from 'openlayers';

@Component ({
	selector: 'my-obs-identification',
	templateUrl: 'obs_identification.component.html',
	styleUrls: ['obs_identification.style.css']
})

export class ObsIdentificationComponent implements OnInit {
	ol:any;

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
					'type': 'Point',
					'coordinates': [-553938.514533026, 6259210.068782893]
				}
			}]
		};

		let geometryStyle = new ol.style.Style({
			fill: new ol.style.Fill({
				color: 'rgba(255, 255, 255, 0.2)'
			}),
			stroke: new ol.style.Stroke({
				color: '#ffcc33',
				width: 2
			}),
			image: new ol.style.Circle({
				radius: 7,
				fill: new ol.style.Fill({
					color: '#ffcc33'
				})
			})
		});

		var Esri_WorldPhysical = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			})
		});

		let vectorSource = new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
		});

		let vectorLayer = new ol.layer.Vector({
			source: vectorSource,
			style: geometryStyle
		});

		var map = new ol.Map({
			layers: [
			Esri_WorldPhysical,
			vectorLayer
			],
			target: 'obs_identification_map',
			view: new ol.View({

				projection: 'EPSG:900913',
				center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
				zoom: 5
			})
		});
	}
}