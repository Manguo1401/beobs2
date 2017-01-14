import { Component, AfterViewInit } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

//import { CarouselComponent } from 'ng2-bootstrap/ng2-bootstrap';
//import * as $ from 'jquery';

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
    $(".switch").hide();
    $("#bilan").show();
    $(".switch2").hide();
    $("#bilan2").show();
    $('#btn_bilan').click(function(){
        $(".switch").hide();
        $("#bilan").show();
    });
    $('#btn_en_attente').click(function(){
        $(".switch").hide();
        $("#en_attente").show();
    });
    $('#btn_mes_trophes').click(function(){
        $(".switch").hide();
        $("#mes_trophes").show();
    });
    $('#btn_display2').click(function(){
        $(".switch").hide();
        $("#display2").show();
    });

    $('#btn_bilan2').click(function(){
        $(".switch2").hide();
        $("#bilan2").show();
    });
    $('#btn_en_attente2').click(function(){
        $(".switch2").hide();
        $("#en_attente2").show();
    });

    /*$(function () {
      $('').popover()
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
