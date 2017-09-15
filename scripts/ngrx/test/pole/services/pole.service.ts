import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PoleDto, CreatePoleDto, PagedResultDtoOfPoleDto } from '../models';

@Injectable()
export class PoleService {

    constructor(private http: Http) {
    }

    loadPoles(): Observable<PagedResultDtoOfPoleDto[]> {
        return this.http.get(API_URL + '/services/app/Pole/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    getPole(id): Observable<PoleDto> {
        return this.http.get(API_URL + '/services/app/Pole/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    createPole(createPoleDto: CreatePoleDto): Observable<PoleDto> {
        return this.http.post(
            API_URL + '/services/app/Pole/Create', JSON.stringify(createPoleDto), this.jwt())
            .map(result => result.json().result || {});
    }

    deletePole(pole: PoleDto): Observable<PoleDto> {
        return this.http.delete(API_URL + `/services/app/Pole/Delete?id=${pole.id}`, this.jwt())
            .map(result => pole);
    }

    updatePole(pole: PoleDto): Observable<PoleDto> {
        return this.http.put(
            API_URL + '/services/app/Pole/Update', JSON.stringify(pole), this.jwt())
            .map(result => pole);
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
