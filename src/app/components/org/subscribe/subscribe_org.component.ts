import { Component } from '@angular/core'
import { Organism } from '../../../objects/organism'

import { ServiceOrganismsModules } from './../../../services/org/org.service'

//declare var $:any;

@Component({
  selector: 'my-subscribe-org',
  templateUrl: 'subscribe_org_page.component.html',

})


export class SubscribeOrgPage {
  private newOrg= new Organism();
  isSubmitted:boolean = false;

  constructor(
    private serviceOrganisms: ServiceOrganismsModules
  ) {
   /* this.newOrg.name= "Name";
    this.newOrg.accr= "Accr";
    this.newOrg.desc= "Desc";*/
  }

  ngOnInit(): void {

  }

  createOrganism(newOrg : Organism) {
    //On effectue une requête http pour créer le nouvel organisme via le service organism
    this.serviceOrganisms.createOrganism(this.newOrg);
    console.log("org.component createOrganism done");
    this.isSubmitted = true;

  }

}
