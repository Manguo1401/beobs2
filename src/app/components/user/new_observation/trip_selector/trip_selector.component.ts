import { Component, AfterViewInit, OnInit } from "@angular/core"

import * as ol from 'openlayers';

@Component ({
	selector: "my-trip-selector",
	templateUrl: 'trip_selector.component.html',
	styleUrls: ['trip_selector.style.css']
})

export class TripSelectorComponent implements AfterViewInit, OnInit {
	ol: any;
	public trip_map: any;

	ngAfterViewInit() {
		let trip_map = this.trip_map;

		$('#collapseNewTrip').on('shown.bs.collapse', function () {
  			trip_map.updateSize();
		});
	}

   	ngOnInit(): void {

   		var Esri_WorldPhysical = new ol.layer.Tile({
   			source: new ol.source.XYZ({
   				url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			})
		});

   		

    	this.trip_map = new ol.Map({
            layers: [
    			Esri_WorldPhysical
            ],
            target: 'trip_map',
            view: new ol.View({

            	projection: 'EPSG:900913',
    			center: ol.proj.transform([3.251945, 46.889646], 'EPSG:4326', 'EPSG:900913'),
    			zoom: 5
            })
    	});
    }
}