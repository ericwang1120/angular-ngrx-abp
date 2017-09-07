import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as TenantActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { TenantService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TenantEffects {
    constructor(
        private action$: Actions,
        private service: TenantService,
    ) { }

    @Effect() loadTenants$ = this.action$.ofType(TenantActions.LOAD_TENANTS)
        .switchMap(() =>
            this.service.loadTenants()
                .map(tenants => ({ type: TenantActions.LOAD_TENANTS_SUCCESS, payload: tenants }))
                .catch(() => of({ type: TenantActions.FAIL }))
        );

    @Effect() getTenant$ = this.action$.ofType(TenantActions.GET_TENANT)
        .map(toPayload)
        .switchMap(id =>
            this.service.getTenant(id)
                .map(tenant => ({ type: TenantActions.GET_TENANT_SUCCESS, payload: tenant }))
                .catch(() => of({ type: TenantActions.FAIL }))
        );

    @Effect() updateTenant$ = this.action$.ofType(TenantActions.UPDATE_TENANT)
        .map(toPayload)
        .mergeMap(tenant =>
            this.service.updateTenant(tenant)
                .map(tenant => ({ type: TenantActions.UPDATE_TENANT_SUCCESS, payload: tenant }))
                .catch(() => of({ type: TenantActions.FAIL }))
        );

    @Effect() addTenant$ = this.action$.ofType(TenantActions.ADD_TENANT)
        .map(toPayload)
        .mergeMap(tenant => this.service.createTenant(tenant)
            .map(tenant => ({ type: TenantActions.ADD_TENANT_SUCCESS, payload: tenant }))
            .catch(() => of({ type: TenantActions.FAIL }))
        );

    @Effect() deleteTenant$ = this.action$.ofType(TenantActions.DELETE_TENANT)
        .map(toPayload)
        .mergeMap(tenant => this.service.deleteTenant(tenant)
            .map(tenant => ({ type: TenantActions.DELETE_TENANT_SUCCESS, payload: tenant }))
            .catch(() => of({ type: TenantActions.FAIL }))
        );
}   
