import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { ListElem } from './../../objects/list_elem'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class AdminService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  /*testfunc(newOrg:any){
    newOrg.accr = "dedede";
    return newOrg;
  }*/

  getListsElem(): Promise<ListElem[]> {
       return this.http.get('admin/api/get_ListsElem')
    .toPromise()
    .then(response => response.json() as ListElem[])
    .catch(this.handleError);
  }

  addListElem(newList: ListElem): Promise<void> {
    //newOrg.accr = "efe"
    console.log("admn.service addListElem"+ JSON.stringify(newList));
    //let theOrg = new Organism();
    //theOrg.accr = "dede";
    //console.log("org.service createOrganism"+ JSON.stringify(theOrg));
    return this.http.post('admin/api/addListElem', JSON.stringify(newList), { headers: this.headers })
      .toPromise()
      .then(res => {res.json(); console.log(res.json())})
      .catch(this.handleError);
  }

  /*addElemInList(editedList: any): Promise<void> {

  }

  editListElem(editedList: any): Promise<void> {
    const url = 'admin/api/editListElem/' + editedList._id;
    return this.http.put(url, JSON.stringify({ list: editedList.listname }), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteListElem(id: any): Promise<void> {
    const url = 'admin/api/deleteListElem/' + id
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
