import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PoleDto, CreatePoleDto, PagedResultDtoOfPoleDto } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class PoleService {

    constructor(private http: Http) {
    }

    loadPoles(): Observable<PagedResultDtoOfPoleDto[]> {
        return this.http.get(API_URL + '/services/app/Pole/GetAll', jwt())
            .map(result => result.json().result);
    }

    getPole(id): Observable<PoleDto> {
        return this.http.get(API_URL + '/services/app/Pole/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createPole(createPoleDto: CreatePoleDto): Observable<PoleDto> {
        return this.http.post(
            API_URL + '/services/app/Pole/Create', JSON.stringify(createPoleDto), jwt())
            .map(result => result.json().result || {});
    }

    deletePole(pole: PoleDto): Observable<PoleDto> {
        return this.http.delete(API_URL + `/services/app/Pole/Delete?id=${pole.id}`, jwt())
            .map(result => pole);
    }

    updatePole(pole: PoleDto): Observable<PoleDto> {
        return this.http.put(
            API_URL + '/services/app/Pole/Update', JSON.stringify(pole), jwt())
            .map(result => pole);
    }
}
