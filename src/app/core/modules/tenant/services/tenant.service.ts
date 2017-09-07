import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TenantDto, CreateTenantDto, PagedResultDtoOfTenantDto } from '../models';

declare const API_URL: String;

@Injectable()
export class TenantService {

    constructor(private http: Http) {
    }

    loadTenants(): Observable<PagedResultDtoOfTenantDto[]> {
        return this.http.get(API_URL + '/services/app/Tenant/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    getTenant(id): Observable<TenantDto> {
        return this.http.get(API_URL + '/services/app/Tenant/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    createTenant(createTenantDto: CreateTenantDto): Observable<TenantDto> {
        return this.http.post(
            API_URL + '/services/app/Tenant/Create', JSON.stringify(createTenantDto), this.jwt())
            .map(result => result.json().result || {});
    }

    deleteTenant(tenant: TenantDto): Observable<TenantDto> {
        return this.http.delete(API_URL + `/services/app/Tenant/Delete?id=${tenant.id}`, this.jwt())
            .map(result => tenant);
    }

    updateTenant(tenant: TenantDto): Observable<TenantDto> {
        return this.http.put(
            API_URL + '/services/app/Tenant/Update', JSON.stringify(tenant), this.jwt())
            .map(result => tenant);
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