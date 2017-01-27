import { Component, AfterViewInit } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
//import * as $ from 'bootstrap/dist/js/bootstrap.min.js';
//import * as $ from 'jquery';

@Component ({
  selector: 'my-observations',
  templateUrl: 'my_observations.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: [
    'my_observations.style.css',
    //'../user_banner.css'
  ]
})

export class MyObservationsComponent implements AfterViewInit{

  /*constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
    }*/


  ngAfterViewInit() {

$('#obs_nav .card').click(function(){
  $('.card').removeClass("selected");
  $(this).addClass("selected");
})


  }
}
