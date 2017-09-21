import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UserDto, CreateUserDto, PagedResultDtoOfUserDto } from '../models';
import { RoleDto } from '../../role/models/role';
import { jwt } from '../../../utilities/helpers/jwt';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    loadUsers(): Observable<PagedResultDtoOfUserDto[]> {
        return this.http.get(API_URL + '/services/app/User/GetAll', jwt())
            .map(result => result.json().result);
    }

    getUser(id): Observable<UserDto> {
        return this.http.get(API_URL + '/services/app/User/Get?id=' + id, jwt())
            .map(result => result.json().result);
    }

    createUser(createUserDto: CreateUserDto): Observable<UserDto> {
        return this.http.post(
            API_URL + '/services/app/User/Create', JSON.stringify(createUserDto), jwt())
            .map(result => result.json().result || {});
    }

    deleteUser(user: UserDto): Observable<UserDto> {
        return this.http.delete(API_URL + `/services/app/User/Delete?id=${user.id}`, jwt())
            .map(result => user);
    }

    updateUser(user: UserDto): Observable<UserDto> {
        return this.http.put(
            API_URL + '/services/app/User/Update', JSON.stringify(user), jwt())
            .map(result => user);
    }

    getRoles(): Observable<RoleDto[]> {
        return this.http.get(API_URL + '/services/app/User/GetRoles', jwt())
            .map(result => result.json().result);
    }
}
