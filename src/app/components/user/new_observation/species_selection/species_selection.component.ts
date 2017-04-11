import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'

/*import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';*/

@Component ({
	selector: 'my-species-selector',
	templateUrl: 'species_selection.component.html'/*,
  	providers: [NgbCarouselConfig]*/
})

export class SpeciesSelectComponent {

	group: boolean = true;

	selectGroup() {
		if(this.group === true ) {
			this.group = false;
		} else {
			this.group = true;
		}
	}

/*	constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 500;
    config.wrap = false;
    config.keyboard = false;
  }*/
}