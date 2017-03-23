import { Component, AfterViewInit } from '@angular/core'
import { FormsModule }    from '@angular/forms'
import {ListElem} from '../../../objects/list_elem'
import { AdminService } from './../../../services/admin/admin.service'

@Component({
  selector: 'my-builder-page',
  templateUrl: 'builder_comp.page.html'
})

export class BuilderCompPage implements AfterViewInit{
  label = "Label";
  info = "les informations complémentaires pour aider l'utilisateur";
  listElems: ListElem[];
  listelemSelected: ListElem;


  constructor(
    private adminService: AdminService
    ) {
    this.adminService.getListsElem()
    .then(
      res => {
        this.listElems = res;
        if(this.listElems.length > 0)
          this.listelemSelected = this.listElems[0];
      }
    );

  }


  createListElem(){

  }

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
