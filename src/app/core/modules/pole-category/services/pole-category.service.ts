import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PoleCategoryDto, CreatePoleCategoryDto, PagedResultDtoOfPoleCategoryDto } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class PoleCategoryService {

    constructor(private http: Http) {
    }

    loadPoleCategories(): Observable<PagedResultDtoOfPoleCategoryDto[]> {
        return this.http.get(API_URL + '/services/app/PoleCategory/GetAll', jwt())
            .map(result => result.json().result);
    }

    getPoleCategory(id): Observable<PoleCategoryDto> {
        return this.http.get(API_URL + '/services/app/PoleCategory/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createPoleCategory(createPoleCategoryDto: CreatePoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.post(
            API_URL +
            '/services/app/PoleCategory/Create', JSON.stringify(createPoleCategoryDto), jwt())
            .map(result => result.json().result || {});
    }

    deletePoleCategory(poleCategory: PoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.delete(API_URL +
            `/services/app/PoleCategory/Delete?id=${poleCategory.id}`, jwt())
            .map(result => poleCategory);
    }

    updatePoleCategory(poleCategory: PoleCategoryDto): Observable<PoleCategoryDto> {
        return this.http.put(
            API_URL + '/services/app/PoleCategory/Update', JSON.stringify(poleCategory), jwt())
            .map(result => poleCategory);
    }
}
