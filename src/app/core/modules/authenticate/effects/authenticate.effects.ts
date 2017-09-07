import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Router } from '@angular/router';

import * as AuthenticateActions from '../actions';
import { AuthenticateService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';
import { AuthenticateDto } from '../models/authenticateDto';
import { AuthenticateResultDto } from '../models/authenticateResultDto';

@Injectable()
export class AuthenticateEffects {

    @Effect() authenticate$ = this.action$.ofType(AuthenticateActions.AUTHENTICATE)
        .map(toPayload)
        .switchMap((authenticateDto: AuthenticateDto) =>
            this.service.authenticate(authenticateDto)
                .map((authenticateResultDto: AuthenticateResultDto) => {
                    this.router.navigate(['/dashboard']);
                    return {
                        type: AuthenticateActions.AUTHENTICATE_SUCCESS,
                        payload: authenticateResultDto
                    };
                }).catch(() => {
                    this.router.navigate(['/login']);
                    return of({ type: AuthenticateActions.AUTHENTICATE_FAIL });
                })
        );

    @Effect() logout$ = this.action$.ofType(AuthenticateActions.LOGOUT)
        .switchMap(() =>
            this.service.logout()
                .map((authenticateResultDto: AuthenticateResultDto) => {
                    this.router.navigate(['/login']);
                    return {
                        type: AuthenticateActions.LOGOUT_SUCCESS,
                        payload: authenticateResultDto
                    };
                }).catch(() => {
                    this.router.navigate(['/login']);
                    return of({ type: AuthenticateActions.AUTHENTICATE_FAIL });
                })
        );

    @Effect() loadFromCache$ = this.action$.ofType(AuthenticateActions.LOAD_FROM_CACHE)
        .switchMap(() =>
            this.service.loadFromCache()
                .map((authenticateResultDto: AuthenticateResultDto) => {
                    if (authenticateResultDto.expireTime > new Date().getTime())
                        return {
                            type: AuthenticateActions.AUTHENTICATE_SUCCESS,
                            payload: authenticateResultDto
                        };
                    return { type: AuthenticateActions.AUTHENTICATE_FAIL };
                })
                .catch(() => {
                    this.router.navigate(['/login']);
                    return of({ type: AuthenticateActions.AUTHENTICATE_FAIL });
                })
        );


    constructor(
        private action$: Actions,
        private service: AuthenticateService,
        private router: Router
    ) { }

}
