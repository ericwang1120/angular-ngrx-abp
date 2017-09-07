import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as UserInfoActions from '../actions';
import * as AuthenticateActions from '../../authenticate/actions';
import { UserInfoService } from '../services';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserInfoEffects {
    @Effect() loadUserInfoWhenAuthenticateSuccess$ =
    this.action$.ofType(AuthenticateActions.AUTHENTICATE_SUCCESS)
        .switchMap(() => Observable.from([{ type: UserInfoActions.LOAD_GRANTED_PERMISSIONS },
        { type: UserInfoActions.GET_CURRENT_LOGIN_INFORMATION }])
            .catch(() => of({ type: UserInfoActions.FAIL }))
        );

    @Effect() getCurrentLoginInformation$ =
    this.action$.ofType(UserInfoActions.GET_CURRENT_LOGIN_INFORMATION)
        .switchMap(() => this.service.getCurrentLoginInformation()
            .map(currentLoginInformation => ({
                type: UserInfoActions.GET_CURRENT_LOGIN_INFORMATION_SUCCESS,
                payload: currentLoginInformation
            }))
            .catch(() => of({ type: UserInfoActions.FAIL }))
        );

    @Effect() loadGrantedPermissions$ =
    this.action$.ofType(UserInfoActions.LOAD_GRANTED_PERMISSIONS)
        .switchMap(() =>
            this.service.getGrantedPermission()
                .map(permissions => ({
                    type: UserInfoActions.LOAD_GRANTED_PERMISSIONS_SUCCESS,
                    payload: permissions
                }))
                .catch(() => of({ type: UserInfoActions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: UserInfoService,
    ) { }
}
