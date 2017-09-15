import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LineDto, CreateLineDto, PagedResultDtoOfLineDto } from '../models';

@Injectable()
export class LineService {

    constructor(private http: Http) {
    }

    loadLines(): Observable<PagedResultDtoOfLineDto[]> {
        return this.http.get(API_URL + '/services/app/Line/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    getLine(id): Observable<LineDto> {
        return this.http.get(API_URL + '/services/app/Line/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    createLine(createLineDto: CreateLineDto): Observable<LineDto> {
        return this.http.post(
            API_URL + '/services/app/Line/Create', JSON.stringify(createLineDto), this.jwt())
            .map(result => result.json().result || {});
    }

    deleteLine(line: LineDto): Observable<LineDto> {
        return this.http.delete(API_URL + `/services/app/Line/Delete?id=${line.id}`, this.jwt())
            .map(result => line);
    }

    updateLine(line: LineDto): Observable<LineDto> {
        return this.http.put(
            API_URL + '/services/app/Line/Update', JSON.stringify(line), this.jwt())
            .map(result => line);
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
