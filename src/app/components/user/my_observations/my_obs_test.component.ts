import { Component, AfterViewInit } from '@angular/core'
import { UserHomeComponent } from '../home/user_home.component'

//import * as $ from 'jquery';

@Component ({
  selector: 'my-obs-test',
  templateUrl: 'my_obs_test.component.html',
  styleUrls: [
    'my_obs_test.style.css'
  ]
})

export class MyObsTestComponent implements AfterViewInit{

ngAfterViewInit() {/*
  //alert("ngAfterViewInit");
    $('#carousel-example-generic').on('slid.bs.carousel', function () {
      alert(".on(slid.bs.carousel function");
        $(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
        $(".carousel-item.active:last-child").insertBefore($(".carousel-item:first-child"));
    });
    //($('#myCarousel')).carousel({ //.carousel ne fonctionne pas!
    //  interval: 40000
    //});

    $('#carouselMulti .item').each(function(){
        alert("each function");
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
          alert("next.next().length>0");
          next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

      }
      else {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            alert("next.next().length<=0");
      }
    });
*/
  }
}
