import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthenticateDto, AuthenticateResultDto } from '../models';

declare const API_URL: String;

@Injectable()
export class AuthenticateService {

    constructor(private http: Http) {
    }

    private getExpireTime(expireInSeconds): number {
        let timeObject = new Date()
        let expireTime = timeObject.setSeconds(timeObject.getSeconds() + expireInSeconds)
        return expireTime;
    }

    private saveInCache(authenticateResultDto: AuthenticateResultDto) {
        //set in cache
        localStorage.setItem("currentUser", JSON.stringify(authenticateResultDto));
    }

    authenticate(authenticateDto: AuthenticateDto): Observable<AuthenticateResultDto> {
        let data = authenticateDto;
        return this.http.post(API_URL + "/TokenAuth/Authenticate", authenticateDto)
            .map(result => {
                let authenticateResultDto: AuthenticateResultDto = result.json()["result"]
                authenticateResultDto.expireTime = this.getExpireTime(authenticateResultDto.expireInSeconds);
                this.saveInCache(authenticateResultDto);
                return authenticateResultDto;
            })
    }

    loadFromCache(): Observable<AuthenticateResultDto> {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        return Observable.of(currentUser);
    }

    logout(): Observable<AuthenticateResultDto> {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        localStorage.removeItem("currentUser");
        return Observable.of(currentUser);
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
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new Headers({ 'Content-Type': 'application/json' });

        if (currentUser && currentUser.accessToken) {
            headers.append('Authorization', 'Bearer ' + currentUser.access_token);
        }

        return new RequestOptions({ headers: headers });
    }
}