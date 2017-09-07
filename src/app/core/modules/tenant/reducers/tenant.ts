import { Action } from '@ngrx/store';

import { PagedResultDtoOfTenantDto, TenantDto } from '../models';
import * as TenantActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface TenantState {
    tenants: TenantDto[];
    totalCount: number;
    tenant: TenantDto;
    loading: boolean;
}

export const initialState: TenantState = {
    tenants: [],
    tenant: null,
    totalCount: 0,
    loading: false,
};

export function reducer(state = initialState, action: Action): TenantState {
    switch (action.type) {
        case TenantActions.LOAD_TENANTS:
        case TenantActions.GET_TENANT:
        case TenantActions.ADD_TENANT:
        case TenantActions.DELETE_TENANT:
        case TenantActions.UPDATE_TENANT: {
            return Object.assign({}, state, {
                loading: toPayload(action),
            });
        };

        case TenantActions.LOAD_TENANTS_SUCCESS: {
            return Object.assign({}, state, {
                tenants: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        };

        case TenantActions.GET_TENANT_SUCCESS: {
            return Object.assign({}, state, {
                tenant: toPayload(action),
                loading: false
            });
        };

        case TenantActions.ADD_TENANT_SUCCESS: {
            return Object.assign({}, state, {
                tenants: [...state.tenants, toPayload(action)],
                loading: false
            });
        };

        case TenantActions.UPDATE_TENANT_SUCCESS: {
            let index = _.findIndex(state.tenants, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedTenantList = [
                    ...state.tenants.slice(0, index),
                    toPayload(action),
                    ...state.tenants.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    tenants: updatedTenantList,
                    tenant: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        };

        case TenantActions.DELETE_TENANT_SUCCESS: {
            return Object.assign({}, state, {
                tenants: state.tenants.filter(tenant => tenant.id != toPayload(action).id),
                loading: false
            });
        };

        case TenantActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        };

        default: {
            return state;
        };
    }
}

export const getTenantList = (state: TenantState) => state.tenants;
export const getTenantListLoading = (state: TenantState) => state.loading;