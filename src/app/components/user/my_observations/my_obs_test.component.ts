import { Component, AfterViewInit } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

//import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

//import * as $ from 'jquery';

@Component ({
  selector: 'my-obs-test',
  templateUrl: 'my_obs_test.component.html',
  styleUrls: [
    'my_obs_test.style.css'
  ]
})

export class MyObsTestComponent implements AfterViewInit{

ngAfterViewInit() {

  /*// for every slide in carousel, copy the next slide's item in the slide.
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

  /*$('#carousel-example-generic').on('slid.bs.carousel', function () {
        $(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
        $(".carousel-item.active:last-child").insertBefore($(".carousel-item:first-child"));
    });*/

    // Your jQuery code goes test
    $('#test').text("HALLO! ^_^");
    $(".switch").hide();
    $("#bilan").show();
    $(".switch2").hide();
    $("#bilan2").show();
    $('#btn_bilan').click(function(){
      //$(".switch").hide();
      //$("#bilan").show();
      if($("#bilan").is(":visible"))
        $("#bilan").hide();
      else
        $("#bilan").show();
    });
    $('#btn_en_attente').click(function(){
      if($("#en_attente").is(":visible"))
        $("#en_attente").hide();
      else
        $("#en_attente").show();

        /*$(".switch").hide();
        $("#en_attente").show();*/
    });
    $('#btn_mes_trophes').click(function(){
      if($("#mes_trophes").is(":visible"))
        $("#mes_trophes").hide();
      else
        $("#mes_trophes").show();

        /*$(".switch").hide();
        $("#mes_trophes").show();*/
    });
    $('#btn_display2').click(function(){
      $(".switch").hide();
      if($("#display2").is(":visible"))
        $("#display2").hide();
      else
        $("#display2").show();

      //$(".switch").hide();
      //$("#display2").show();
    });

    $('#btn_bilan2').click(function(){
        $(".switch2").hide();
        $("#bilan2").show();
    });
    $('#btn_en_attente2').click(function(){
        $(".switch2").hide();
        $("#en_attente2").show();
    });


    /*carousel()
    $(function () {
      Carousel();
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
