import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as RoleActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { RoleService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RoleEffects {
    constructor(
        private action$: Actions,
        private service: RoleService,
    ) { }

    @Effect() loadRoles$ = this.action$.ofType(RoleActions.LOAD_ROLES)
        .switchMap(() =>
            this.service.loadRoles()
                .map(roles => ({ type: RoleActions.LOAD_ROLES_SUCCESS, payload: roles }))
                .catch(() => of({ type: RoleActions.FAIL }))
        );

    @Effect() loadAllPermissions$ = this.action$.ofType(RoleActions.LOAD_ALL_PERMISSIONS)
        .switchMap(() =>
            this.service.loadAllPermissions()
                .map(permissions => ({ type: RoleActions.LOAD_ALL_PERMISSIONS_SUCCESS, payload: permissions }))
                .catch(() => of({ type: RoleActions.FAIL }))
        );

    @Effect() getRole$ = this.action$.ofType(RoleActions.GET_ROLE)
        .map(toPayload)
        .switchMap(id =>
            this.service.getRole(id)
                .map(role => ({ type: RoleActions.GET_ROLE_SUCCESS, payload: role }))
                .catch(() => of({ type: RoleActions.FAIL }))
        );

    @Effect() updateRole$ = this.action$.ofType(RoleActions.UPDATE_ROLE)
        .map(toPayload)
        .mergeMap(role =>
            this.service.updateRole(role)
                .mergeMap(role => (
                    Observable.from([
                        { type: RoleActions.UPDATE_ROLE_SUCCESS, payload: role },
                        { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS }
                    ])
                ))
                .catch(() => of({ type: RoleActions.FAIL }))
        );

    @Effect() addRole$ = this.action$.ofType(RoleActions.ADD_ROLE)
        .map(toPayload)
        .mergeMap(role => this.service.createRole(role)
            .mergeMap(role => (
                Observable.from([
                    { type: RoleActions.ADD_ROLE_SUCCESS, payload: role },
                    { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS }
                ])
            ))
            .catch(() => of({ type: RoleActions.FAIL }))
        );

    @Effect() deleteRole$ = this.action$.ofType(RoleActions.DELETE_ROLE)
        .map(toPayload)
        .mergeMap(role => this.service.deleteRole(role)
            .mergeMap(role =>
                Observable.from([
                    { type: RoleActions.DELETE_ROLE_SUCCESS, payload: role },
                    { type: UserInfoActions.LOAD_GRANTED_PERMISSIONS }
                ])
            )
            .catch(() => of({ type: RoleActions.FAIL }))
        );
}   
