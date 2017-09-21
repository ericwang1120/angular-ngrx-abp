import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Permission } from '../models';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class UserInfoService {

    constructor(private http: Http) {
    }

    getAll(): Observable<any> {
        return this.http.get(HOST_URL + '/AbpUserConfiguration/GetAll', jwt())
            .map(result => result.json()['result']);
    }

    getGrantedPermission(): Observable<Permission[]> {
        return this.http.get(HOST_URL + '/AbpUserConfiguration/GetAll', jwt())
            .map(result => {
                return result.json()['result']['auth']['grantedPermissions']
            })
            .map(permissionDict => this.transformToPermissionList(permissionDict));
    }

    getCurrentLoginInformation(): Observable<Permission[]> {
        return this.http.get(
            HOST_URL + '/api/services/app/Session/GetCurrentLoginInformations', jwt())
            .map(result => result.json()['result']);
    }

    // transform from permission dict to list
    private transformToPermissionList(permissionDict): Permission[] {
        let result: Permission[] = [];
        for (let key in permissionDict) {
            if (permissionDict.hasOwnProperty(key)) {
                result.push({
                    permissionName: key,
                    isGranted: permissionDict[key] === 'true' ? true : false
                });
            }
        }
        return result;
    }
}
