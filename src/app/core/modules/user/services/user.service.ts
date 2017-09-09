import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UserDto, CreateUserDto, PagedResultDtoOfUserDto } from '../models';
import { RoleDto } from '../../role/models/role';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    loadUsers(): Observable<PagedResultDtoOfUserDto[]> {
        return this.http.get(API_URL + '/services/app/User/GetAll', this.jwt())
            .map(result => result.json().result);
    }

    getUser(id): Observable<UserDto> {
        return this.http.get(API_URL + '/services/app/User/Get?id=' + id, this.jwt())
            .map(result => result.json().result);
    }

    createUser(createUserDto: CreateUserDto): Observable<UserDto> {
        return this.http.post(
            API_URL + '/services/app/User/Create', JSON.stringify(createUserDto), this.jwt())
            .map(result => result.json().result || {});
    }

    deleteUser(user: UserDto): Observable<UserDto> {
        return this.http.delete(API_URL + `/services/app/User/Delete?id=${user.id}`, this.jwt())
            .map(result => user);
    }

    updateUser(user: UserDto): Observable<UserDto> {
        return this.http.put(
            API_URL + '/services/app/User/Update', JSON.stringify(user), this.jwt())
            .map(result => user);
    }

    getRoles(): Observable<RoleDto[]> {
        return this.http.get(API_URL + '/services/app/User/GetRoles', this.jwt())
            .map(result => result.json().result);
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
