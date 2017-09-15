import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { {{Variable}}Dto, Create{{Variable}}Dto, PagedResultDtoOf{{Variable}}Dto } from '../models';

@Injectable()
export class {{Variable}}Service {

    constructor(private http: Http) {
    }

    load{{Variables}}(): Observable<PagedResultDtoOf{{Variable}}Dto[]> {
        return this.http.get(API_URL + '/services/app/{{Variable}}/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    get{{Variable}}(id): Observable<{{Variable}}Dto> {
        return this.http.get(API_URL + '/services/app/{{Variable}}/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    create{{Variable}}(create{{Variable}}Dto: Create{{Variable}}Dto): Observable<{{Variable}}Dto> {
        return this.http.post(
            API_URL + '/services/app/{{Variable}}/Create', JSON.stringify(create{{Variable}}Dto), this.jwt())
            .map(result => result.json().result || {});
    }

    delete{{Variable}}({{variable}}: {{Variable}}Dto): Observable<{{Variable}}Dto> {
        return this.http.delete(API_URL + `/services/app/{{Variable}}/Delete?id=${{{variable}}.id}`, this.jwt())
            .map(result => {{variable}});
    }

    update{{Variable}}({{variable}}: {{Variable}}Dto): Observable<{{Variable}}Dto> {
        return this.http.put(
            API_URL + '/services/app/{{Variable}}/Update', JSON.stringify({{variable}}), this.jwt())
            .map(result => {{variable}});
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
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new Headers({ 'Content-Type': 'application/json' });

        if (currentUser && currentUser.accessToken) {
            headers.append('Authorization', 'Bearer ' + currentUser.accessToken);
        }

        return new RequestOptions({ headers: headers });
    }
}
