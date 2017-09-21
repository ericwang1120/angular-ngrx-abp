import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthenticateDto, AuthenticateResultDto } from '../models';

@Injectable()
export class AuthenticateService {

    constructor(private http: Http) { }

    authenticate(authenticateDto: AuthenticateDto): Observable<AuthenticateResultDto> {
        let data = authenticateDto;
        return this.http.post(API_URL + '/TokenAuth/Authenticate', authenticateDto)
            .map(result => {
                let authenticateResultDto: AuthenticateResultDto = result.json()['result'];
                authenticateResultDto.expireTime
                    = this.getExpireTime(authenticateResultDto.expireInSeconds);
                this.saveInCache(authenticateResultDto);
                return authenticateResultDto;
            });
    }

    loadFromCache(): Observable<AuthenticateResultDto> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return Observable.of(currentUser);
    }

    logout(): Observable<AuthenticateResultDto> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        return Observable.of(currentUser);
    }

    private getExpireTime(expireInSeconds): number {
        let timeObject = new Date();
        let expireTime = timeObject.setSeconds(timeObject.getSeconds() + expireInSeconds);
        return expireTime;
    }

    private saveInCache(authenticateResultDto: AuthenticateResultDto) {
        // set in cache
        localStorage.setItem('currentUser', JSON.stringify(authenticateResultDto));
    }
}
