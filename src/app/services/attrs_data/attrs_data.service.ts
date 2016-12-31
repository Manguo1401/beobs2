import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { AttrData } from './../../objects/attr_data'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ServiceAttrsData {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getAttrsData(): Promise<AttrData[]> {
   		return this.http.get('home/dao/get_attrs_data')
		.toPromise()
		.then(response => response.json() as AttrData[])
		.catch(this.handleError);
	}

	createAttrData(newAttrData: string, catId: string): Promise<AttrData>{
		return this.http.post('admin/dao/addAttrData', 
			JSON.stringify({
				name: newAttrData, 
				category_id: catId
			}), {headers: this.headers}
		)
	    .toPromise()
	    .then(res => res.json())
	    .catch(this.handleError);
	}

	editAttrData(editedAttrData: any): Promise<void> {
		const url = 'admin/dao/editAttrData/' + editedAttrData._id;
		return this.http.put(url, JSON.stringify({name: editedAttrData.name}), {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	deleteAttrData(id: any): Promise<void> {
		const url = 'admin/dao/deleteAttrData/' + id
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	addToCategory(attrData: any, category: any) {
		return this.http.put('admin/dao/addToCategory', JSON.stringify({
			_id: attrData._id,
			category: category._id
		}), {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
   		return Promise.reject(error.message || error);
  	}

}