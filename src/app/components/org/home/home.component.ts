import { Component, AfterViewInit, ElementRef, Renderer} from '@angular/core'

//banner
import { OrgBannerComponent } from '../org_banner/org_banner.component'
import { OrgMenuComponent } from '../org_banner/org_menu.component'
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-home-component',
  templateUrl: 'home.component.html',
  providers: [NgbDatepicker],
  styleUrls: ['home.style.css',
  '../../css/utils.style.scss'],
})

export class HomeOrgComponent implements AfterViewInit{
  //model;

  constructor(config: NgbDatepicker) {
  }

  ngAfterViewInit() {

    $( document ).ready(function() {//permet d'attendre le chargement des composants fils!
      //Leftpanelfixed se fixe quand le scroll positionne en au le panel (et inversement)
      var fixedNavTop = 54; //Si la nav principale est fixed, la prendre en compte (dans la CSS aussi)

      let topelement = $('#leftpanelfixed').offset().top;

      //Dimensionner la hauteur du panneau des espèces en fonction de la fenetre
      var hwin = $(window).height();
      var hoverflowInPanel = $('#overflowfix').offset().top - topelement;
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

    });




  }
}
