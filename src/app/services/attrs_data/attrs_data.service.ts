import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { AttrData } from './../../objects/attr_data'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ServiceAttrsData {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getAttrsData(): Promise<AttrData[]> {
   		return this.http.get('/home/get_attr_data')
		.toPromise()
		.then(response => response.json() as AttrData[])
		.catch(this.handleError);
	}

	createAttrData(newAttrData: string, catId: string): Promise<AttrData>{
		return this.http.post('admin/api/addAttrData', 
			JSON.stringify({
				name: newAttrData, 
				category_id: catId
			}), {headers: this.headers}
		)
	    .toPromise()
	    .then(res => res.json())
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
   		return Promise.reject(error.message || error);
  	}

}