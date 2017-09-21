import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TenantDto, CreateTenantDto, PagedResultDtoOfTenantDto } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class TenantService {

    constructor(private http: Http) {
    }

    loadTenants(): Observable<PagedResultDtoOfTenantDto[]> {
        return this.http.get(API_URL + '/services/app/Tenant/GetAll', jwt())
            .map(result => result.json().result);
    }

    getTenant(id): Observable<TenantDto> {
        return this.http.get(API_URL + '/services/app/Tenant/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createTenant(createTenantDto: CreateTenantDto): Observable<TenantDto> {
        return this.http.post(
            API_URL + '/services/app/Tenant/Create', JSON.stringify(createTenantDto), jwt())
            .map(result => result.json().result || {});
    }

    deleteTenant(tenant: TenantDto): Observable<TenantDto> {
        return this.http.delete(API_URL + `/services/app/Tenant/Delete?id=${tenant.id}`, jwt())
            .map(result => tenant);
    }

    updateTenant(tenant: TenantDto): Observable<TenantDto> {
        return this.http.put(
            API_URL + '/services/app/Tenant/Update', JSON.stringify(tenant), jwt())
            .map(result => tenant);
    }
}
