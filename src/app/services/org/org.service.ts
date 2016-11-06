import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { Organism } from './../../objects/organism'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ServiceOrganismsModules {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  /*testfunc(newOrg:any){
    newOrg.accr = "dedede";
    return newOrg;
  }*/
  createOrganism(newOrg: Organism): Promise<Organism> {
    //newOrg.accr = "efe"
    console.log("org.service createOrganism"+ JSON.stringify(newOrg));
    //let theOrg = new Organism();
    //theOrg.accr = "dede";
    //console.log("org.service createOrganism"+ JSON.stringify(theOrg));
    return this.http.post('org/api/createOrganism', JSON.stringify(newOrg), { headers: this.headers })
      .toPromise()
      .then(res => {res.json(); console.log(res.json())})
      .catch(this.handleError);
  }

  /*editCategory(editedCategory: any): Promise<void> {
    const url = 'admin/api/editCategory/' + editedCategory._id;
    return this.http.put(url, JSON.stringify({ name: editedCategory.name }), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteCategory(id: any): Promise<void> {
    const url = 'admin/api/deleteCategory/' + id
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
