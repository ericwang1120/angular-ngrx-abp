import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Flavor } from '../models/flavor';

declare const API_URL: String;

@Injectable()
export class FlavorService {

    constructor(private http: Http) {
    }

    getFlavors(): Observable<Flavor[]> {
        return this.http.get(API_URL + "/flavors")
            .map(result => result.json()["data"])
    }

    getFlavor(id): Observable<Flavor> {
        return this.http.get(API_URL + "/flavors/" + id)
            .map(result => result.json()["data"])
    }

    createFlavor(flavor: Flavor): Observable<Flavor> {
        let data = {
            name: flavor.name
        };

        return this.http.post(API_URL + "/flavors", JSON.stringify(data), this.jwt())
            .map(result => result.json().data || {})
    }

    deleteFlavor(flavor: Flavor): Observable<any> {
        //api of free web server
        // if (ENV == "development") {
        //     return this.http.post(this.apiUrl + '/' + flavor.id + "/delete", null, this.jwt()).map(result => result.json().data || {})
        //         .catch(this.handleError);
        // }
        return this.http.delete(API_URL + '/flavors/' + flavor.uid, this.jwt())
            .map(result => result.json().data || {}
            )
    }

    updateFlavor(flavor: Flavor): Observable<Flavor> {
        let data = {
            name: flavor.name
        };

        return this.http.put(API_URL + '/flavors/' + flavor.uid, JSON.stringify(data), this.jwt()).map(result => result.json().data || {})
    }

    private handleError(error: Response | any) {
        let errMsg: String;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new Headers({ 'Content-Type': 'application/json' });

        if (currentUser && currentUser.access_token) {
            headers.append('Authorization', 'Bearer ' + currentUser.access_token);
        }

        return new RequestOptions({ headers: headers });
    }
}