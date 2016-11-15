import { Injectable } from '@angular/core'

import { Http, Headers } from '@angular/http'

import { Category } from './../../objects/categorie'

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ServiceCaterogiesModules {

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getCategories(): Promise<Category[]> {
   		return this.http.get('home/dao/get_categories')
		.toPromise()
		.then(response => /*{*/response.json() as Category[]/*; console.log(response.json())}*/)
		.catch(this.handleError);
	}

	createCategory(newCat: string): Promise<Category>{
		return this.http.post('admin/dao/addCategory', JSON.stringify({name: newCat}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json())
	    .catch(this.handleError);
	}

	editCategory(editedCategory: any): Promise<void> {
		const url = 'admin/dao/editCategory/' + editedCategory._id;
		return this.http.put(url, JSON.stringify({name: editedCategory.name}), {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	deleteCategory(id: any): Promise<void> {
		const url = 'admin/dao/deleteCategory/' + id
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	checkCategoryId(categories): Promise<void> {
		return this.http.post('admin/dao/checkCategories', JSON.stringify(categories), {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
   		return Promise.reject(error.message || error);
  	}

}