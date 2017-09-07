import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RoleDto, CreateRoleDto, PagedResultDtoOfRoleDto, PermissionDto } from '../models';

declare const API_URL: String;

@Injectable()
export class RoleService {

    constructor(private http: Http) {
    }

    loadRoles(): Observable<PagedResultDtoOfRoleDto[]> {
        return this.http.get(API_URL + "/services/app/Role/GetAll", this.jwt())
            .map(result => result.json().result)
    }

    getRole(id): Observable<RoleDto> {
        return this.http.get(API_URL + "/services/app/Role/Get?id=" + id, this.jwt())
            .map(result => result.json().result)
    }

    createRole(createRoleDto: CreateRoleDto): Observable<RoleDto> {
        return this.http.post(API_URL + "/services/app/Role/Create", JSON.stringify(createRoleDto), this.jwt())
            .map(result => result.json().result || {})
    }

    deleteRole(role: RoleDto): Observable<RoleDto> {
        return this.http.delete(API_URL + `/services/app/Role/Delete?id=${role.id}`, this.jwt())
            .map(result => role)
    }

    updateRole(role: RoleDto): Observable<RoleDto> {
        return this.http.put(API_URL + '/services/app/Role/Update', JSON.stringify(role), this.jwt())
            .map(result => role)
    }

    loadAllPermissions(): Observable<PermissionDto[]> {
        return this.http.get(API_URL + '/services/app/Role/GetAllPermissions', this.jwt())
            .map(result => result.json().result)
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