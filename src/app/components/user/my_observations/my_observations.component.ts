import { Component, AfterViewInit } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component ({
  selector: 'my-observations',
  templateUrl: 'my_observations.component.html',
  styleUrls: [
    'my_observations.style.css',
    //'../user_banner.css'
  ]
})

export class MyObservationsComponent implements AfterViewInit{

ngAfterViewInit() {
    // Your jQuery code goes test
    $('#test').text("HALLO! ^_^");
    /*$(function () {
      $('[data-toggle="popover"]').popover()
    })
    // Instantiate the Bootstrap carousel
    $('#theMultiCarousel').carousel({
      interval: false
    });*/
/*
    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });*/
  }
}
