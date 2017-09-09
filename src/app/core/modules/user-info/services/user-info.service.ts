import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Permission } from '../models';

@Injectable()
export class UserInfoService {

    constructor(private http: Http) {
    }

    getGrantedPermission(): Observable<Permission[]> {
        return this.http.get(HOST_URL + '/AbpUserConfiguration/GetAll', this.jwt())
            .map(result => result.json()['result']['auth']['grantedPermissions'])
            .map(permissionDict => {
                let result: Permission[] = [];
                for (let key in permissionDict) {
                    if (permissionDict.hasOwnProperty(key)) {
                        result.push({
                            PermissionName: key,
                            isGranted: permissionDict[key] === 'true' ? true : false
                        });
                    }
                }
                return result;
            });
    }

    getCurrentLoginInformation(): Observable<Permission[]> {
        return this.http.get(
            HOST_URL + '/api/services/app/Session/GetCurrentLoginInformations', this.jwt())
            .map(result => result.json()['result']);
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
