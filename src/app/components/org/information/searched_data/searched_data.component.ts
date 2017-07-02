import { Component, OnInit } from '@angular/core'

import * as ol from 'openlayers'

//banner
import { OrgBannerComponent } from '../../org_banner/org_banner.component'
import { OrgMenuComponent } from '../../org_banner/org_menu.component'

@Component({
  selector: 'my-org-searched_data',
  templateUrl: 'searched_data.component.html'
})

export class SearchedDataOrgComponent implements OnInit {

	ol: any;

	ngOnInit(): void {
		let geojsonObject = {
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
					'coordinates': [[[-553938.514533026, 6259210.068782893], [-169918.88442830055, 6232304.234826512], [-279988.20515895437, 5996266.691481887], [-556384.4994381517, 6124680.899000984], [-553938.514533026, 6259210.068782893]]]
				},
				'properties': {
					'name': 'fast_banana'
				}
			},{
				'type': 'Feature',
				'geometry': {
					'type': 'Polygon',
					'coordinates': [[[427434.957699843, 5359669.039152012],
					[342436.982246727, 5444055.518378846], [325315.0879108475, 5379236.918393017], [350997.9294146667, 5329705.724064223], [427434.957699843, 5359669.039152012]]]
				},
				'properties': {
					'name': 'cloud'
				}
				
			}]
		};

		let geometryStyle = new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: [92, 184, 92, 1], 
				width: 2
			})
		});

		let Esri_WorldPhysical = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			})
		});

		let vectorSource = new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
		});
		let vectorLayer = new ol.layer.Vector({    source:vectorSource });

		let map = new ol.Map({
			layers: [
			Esri_WorldPhysical,
			vectorLayer
			],
			target: 'searched_data_map',
			view: new ol.View({

				projection: 'EPSG:900913',
				center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
				zoom: 5
			})
		});
	}
}
