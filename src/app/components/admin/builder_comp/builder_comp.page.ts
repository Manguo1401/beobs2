import { Component, AfterViewInit } from '@angular/core'
import { FormsModule }    from '@angular/forms'

@Component({
  selector: 'my-builder-page',
  templateUrl: 'builder_comp.page.html'
})

export class BuilderCompPage implements AfterViewInit{
  label = "Label";
  info = "les informations complémentaires pour aider l'utilisateur";
  ngAfterViewInit() {
    //alert('ready');
    $( document ).ready(function() {
      $(".input-type>div").hide();
      $("#Format .btn").hide();
      $(".single").show();

      $( "#Type label" ).on( "click", function() {
        $("#Format .btn").hide();
        $("."+$(this).find("input").val()).show();
      });

      $( "#Format label").on( "click", function() {
        $(".input-type>div").hide();
        $("."+$(this).find("input").val()).show();
      });


    });
  }


}
