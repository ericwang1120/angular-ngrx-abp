import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PoleCategoryDto, CreatePoleCategoryDto, PagedResultDtoOfPoleCategoryDto } from '../models';

@Injectable()
export class PoleCategoryService {

    constructor(private http: Http) {
    }

    loadPoleCategories(): Observable<PagedResultDtoOfPoleCategoryDto[]> {
        return this.http.get(API_URL + '/services/app/PoleCategory/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    getPoleCategory(id): Observable<PoleCategoryDto> {
        return this.http.get(API_URL + '/services/app/PoleCategory/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    createPoleCategory(createPoleCategoryDto: CreatePoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.post(
            API_URL + '/services/app/PoleCategory/Create', JSON.stringify(createPoleCategoryDto), this.jwt())
            .map(result => result.json().result || {});
    }

    deletePoleCategory(poleCategory: PoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.delete(API_URL + `/services/app/PoleCategory/Delete?id=${poleCategory.id}`, this.jwt())
            .map(result => poleCategory);
    }

    updatePoleCategory(poleCategory: PoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.put(
            API_URL + '/services/app/PoleCategory/Update', JSON.stringify(poleCategory), this.jwt())
            .map(result => poleCategory);
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
