import { Component, OnInit } from '@angular/core'

import * as ol from 'openlayers'

@Component ({
	selector: 'my-global-results',
	templateUrl: 'global_results.component.html',
	styleUrls: ['global_results.style.css']
})

export class GlobalResultsComponent implements OnInit{

	ol: any;
	showedPanel: string = 'taxonomic_tree'


	showPanel(showedPanel) {
		this.showedPanel = showedPanel
	}

	///////////////////////
	//////// CHART ////////
	///////////////////////

	// Doughnut
	public pieChartLabels:string[] = ['Mammifères', 'Reptiles', 'Amphibiens'];
	public pieChartData:number[] = [350, 450, 100];
	public pieChartType:string = 'pie';

	// events
	/*public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}*/


	ngOnInit(): void {
		//////////////////////////////
		/////////// MAP //////////////
		//////////////////////////////

		var points = 2000;

		function getRandomIntInclusive (min, max): number {
			min = Math.ceil(min);
			max = Math.floor(max);
			let coord : number = Math.floor(Math.random() * (max - min + 1)) + min;
			return coord;
		}

		var features = new Array(points);

		for (var i = 0; i < points; ++i) {

			let lat: number = getRandomIntInclusive(-1965349, 2689359);
			let long: number = getRandomIntInclusive(5248988, 6599171);

			let feat = new ol.Feature({
				geometry: new ol.geom.Point([lat, long])
			});
			features[i] = feat;
		}

		var source = new ol.source.Vector({
			features: features
		});

		var clusterSource = new ol.source.Cluster({
			distance: 80,
			source: source
		});

		/*let vectorSource = new ol.source.Vector({
			features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
		});*/

		var styleCache = {};
		let vectorLayer = new ol.layer.Vector({    
			source: clusterSource,
			style: function(feature) {
				var size = feature.get('features').length;
				var style = styleCache[size];
				if (!style) {
					style = new ol.style.Style({
						image: new ol.style.Circle({
							radius: 10 + (size^2*3.14)/3,
							stroke: new ol.style.Stroke({
								color: '#fff'
							}),
							fill: new ol.style.Fill({
								color: '#3399CC'
							})
						}),
						text: new ol.style.Text({
							text: size.toString(),
							fill: new ol.style.Fill({
								color: '#fff'
							})
						})
					});
					styleCache[size] = style;
				}
				return style;
			}
		});

		var Esri_WorldPhysical = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			})
		});

		/*console.log(vectorLayer);*/

		var map = new ol.Map({
			layers: [
			Esri_WorldPhysical,
			vectorLayer
			],
			target: 'global_result_map',
			view: new ol.View({

				projection: 'EPSG:900913',
				center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
				zoom: 6
			})
		});

	}
}