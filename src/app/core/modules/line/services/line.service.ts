import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LineDto, CreateLineDto, PagedResultDtoOfLineDto } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class LineService {

    constructor(private http: Http) {
    }

    loadLines(): Observable<PagedResultDtoOfLineDto[]> {
        return this.http.get(API_URL + '/services/app/Line/GetAll', jwt())
            .map(result => result.json().result);
    }

    getLine(id): Observable<LineDto> {
        return this.http.get(API_URL + '/services/app/Line/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createLine(createLineDto: CreateLineDto): Observable<LineDto> {
        return this.http.post(
            API_URL + '/services/app/Line/Create', JSON.stringify(createLineDto), jwt())
            .map(result => result.json().result || {});
    }

    deleteLine(line: LineDto): Observable<LineDto> {
        return this.http.delete(API_URL + `/services/app/Line/Delete?id=${line.id}`, jwt())
            .map(result => line);
    }

    updateLine(line: LineDto): Observable<LineDto> {
        return this.http.put(
            API_URL + '/services/app/Line/Update', JSON.stringify(line), jwt())
            .map(result => line);
    }
}
