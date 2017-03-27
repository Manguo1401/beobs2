import { Component, AfterViewInit } from '@angular/core'
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component ({
  selector: 'my-news',
  templateUrl: 'news.component.html',
  providers: [NgbDatepicker],
  styleUrls: [
    './../my_observations/my_observations.style.css',
    //'../user_banner.css'
  ]
})

export class NewsComponent implements AfterViewInit{
  //model;

  constructor(config: NgbDatepicker) {
  }


  show(imgclick:string, nameItem:string){
    $("#SortieInfo").hide();
    $("#Obs1Info").hide();
    $("#Obs2Info").hide();
    $("#Obs3Info").hide();
    $("#Obs1Details").hide();
    $("#Obs2Details").hide();
    $("#Obs3Details").hide();
    $("#"+nameItem+"Info").show();
    $("#"+nameItem+"Details").show();

    $("#img1").removeClass('icon-active');
    $("#img2").removeClass('icon-active');
    $("#img3").removeClass('icon-active');
    $("#"+imgclick).addClass('icon-active');
  }


  ngAfterViewInit() {

    $( document ).ready(function() {//permet d'attendre le chargement des composants fils!
      //Leftpanelfixed se fixe quand le scroll positionne en au le panel (et inversement)
      let fixedNavTop = 54; //Si la nav principale est fixed, la prendre en compte (dans la CSS aussi)

      let topelement = $('#leftpanelfixed').offset().top;

      //Dimensionner la hauteur du panneau des espèces en fonction de la fenetre
      let hwin = $(window).height();
      let hoverflowInPanel = $('#overflowfix').offset().top - topelement;
      $('#overflowfix').height(hwin-hoverflowInPanel-fixedNavTop);
      //alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));

      //initialisation si le scroll est déjà bas
      if($(window).scrollTop()>topelement-fixedNavTop)
      {
        //console.log('bat => fixe');
        if(!$('#leftpanelfixed').hasClass("fixed"))
          $('#leftpanelfixed').addClass("fixed");
      }
      else{
        //console.log('haut => non fixe');
        if($('#leftpanelfixed').hasClass("fixed"))
          $('#leftpanelfixed').removeClass("fixed");
      }


      //Mise à jour de l'état du panneau fixe selon le scroll
      $(window).scroll(function()
      {
        /*//verification de la taille, ca déconne parfois...
        if($('#overflowfix').height()<11)
        {
          var newH = $(window).height()-($('#overflowfix').offset().top - $('#leftpanelfixed').offset().top);
          //alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));
          $('#overflowfix').height(newH);
        }*/
        this.scrollTop = $(window).scrollTop();

        if($(window).scrollTop()>topelement-fixedNavTop)
        {
          //console.log('bat => fixe');
          if(!$('#leftpanelfixed').hasClass("fixed"))
            $('#leftpanelfixed').addClass("fixed");
        }
        else{
          //console.log('haut => non fixe');
          if($('#leftpanelfixed').hasClass("fixed"))
            $('#leftpanelfixed').removeClass("fixed");
        }
      });


      $("#Obs1Info").hide();
      $("#Obs2Info").hide();
      $("#Obs3Info").hide();
      $("#Obs1Details").hide();
      $("#Obs2Details").hide();
      $("#Obs3Details").hide();

    });




  }
}
