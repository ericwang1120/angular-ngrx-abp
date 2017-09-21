import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RoleDto, CreateRoleDto, PagedResultDtoOfRoleDto, PermissionDto } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class RoleService {

    constructor(private http: Http) {
    }

    loadRoles(): Observable<PagedResultDtoOfRoleDto[]> {
        return this.http.get(API_URL + '/services/app/Role/GetAll', jwt())
            .map(result => result.json().result);
    }

    getRole(id): Observable<RoleDto> {
        return this.http.get(API_URL + '/services/app/Role/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createRole(createRoleDto: CreateRoleDto): Observable<RoleDto> {
        return this.http.post(
            API_URL + '/services/app/Role/Create', JSON.stringify(createRoleDto), jwt())
            .map(result => result.json().result || {});
    }

    deleteRole(role: RoleDto): Observable<RoleDto> {
        return this.http.delete(API_URL + `/services/app/Role/Delete?id=${role.id}`, jwt())
            .map(result => role);
    }

    updateRole(role: RoleDto): Observable<RoleDto> {
        return this.http.put(
            API_URL + '/services/app/Role/Update', JSON.stringify(role), jwt())
            .map(result => role);
    }

    loadAllPermissions(): Observable<PermissionDto[]> {
        return this.http.get(API_URL + '/services/app/Role/GetAllPermissions', jwt())
            .map(result => result.json().result);
    }
}
