import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as UserActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { UserService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserEffects {
    @Effect() loadUsers$ = this.action$.ofType(UserActions.LOAD_USERS)
        .switchMap(() =>
            this.service.loadUsers()
                .map(users => ({ type: UserActions.LOAD_USERS_SUCCESS, payload: users }))
                .catch(() => of({ type: UserActions.FAIL }))
        );

    @Effect() getRoles$ = this.action$.ofType(UserActions.GET_ROLES)
        .switchMap(() =>
            this.service.getRoles()
                .map(roles => ({ type: UserActions.GET_ROLES_SUCCESS, payload: roles }))
                .catch(() => of({ type: UserActions.FAIL }))
        );

    @Effect() getUser$ = this.action$.ofType(UserActions.GET_USER)
        .map(toPayload)
        .switchMap(id =>
            this.service.getUser(id)
                .map(user => ({ type: UserActions.GET_USER_SUCCESS, payload: user }))
                .catch(() => of({ type: UserActions.FAIL }))
        );

    @Effect() updateUser$ = this.action$.ofType(UserActions.UPDATE_USER)
        .map(toPayload)
        .mergeMap(user =>
            this.service.updateUser(user)
                .mergeMap(updatedUser => (
                    Observable.from([
                        { type: UserActions.UPDATE_USER_SUCCESS, payload: updatedUser },
                        { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS },
                        { type: UserInfoActions.GET_CURRENT_LOGIN_INFORMATION }
                    ])
                ))
                .catch(() => of({ type: UserActions.FAIL }))
        );

    @Effect() addUser$ = this.action$.ofType(UserActions.ADD_USER)
        .map(toPayload)
        .mergeMap(user => this.service.createUser(user)
            .mergeMap(createdUser => (
                Observable.from([
                    { type: UserActions.ADD_USER_SUCCESS, payload: createdUser },
                    { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS }
                ])
            ))
            .catch(() => of({ type: UserActions.FAIL }))
        );

    @Effect() deleteUser$ = this.action$.ofType(UserActions.DELETE_USER)
        .map(toPayload)
        .mergeMap(user => this.service.deleteUser(user)
            .mergeMap(deletedUser =>
                Observable.from([
                    { type: UserActions.DELETE_USER_SUCCESS, payload: deletedUser },
                    { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS }
                ])
            )
            .catch(() => of({ type: UserActions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: UserService,
    ) { }

}

