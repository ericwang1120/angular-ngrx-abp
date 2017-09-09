import { Action } from '@ngrx/store';

import { PagedResultDtoOfRoleDto, RoleDto, PermissionDto } from '../models';
import * as RoleActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface RoleState {
    roles: RoleDto[];
    totalCount: number;
    role: RoleDto;
    loading: boolean;
    allPermissions: PermissionDto[];
}

export const initialState: RoleState = {
    roles: [],
    role: null,
    totalCount: 0,
    loading: false,
    allPermissions: [],
};

export function reducer(state = initialState, action: Action): RoleState {
    switch (action.type) {
        case RoleActions.LOAD_ROLES:
        case RoleActions.LOAD_ALL_PERMISSIONS:
        case RoleActions.GET_ROLE:
        case RoleActions.ADD_ROLE:
        case RoleActions.DELETE_ROLE:
        case RoleActions.UPDATE_ROLE: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case RoleActions.LOAD_ROLES_SUCCESS: {
            return Object.assign({}, state, {
                roles: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }

        case RoleActions.LOAD_ALL_PERMISSIONS_SUCCESS: {
            return Object.assign({}, state, {
                allPermissions: toPayload(action).items,
                loading: false
            });
        }

        case RoleActions.GET_ROLE_SUCCESS: {
            return Object.assign({}, state, {
                role: toPayload(action),
                loading: false
            });
        }

        case RoleActions.ADD_ROLE_SUCCESS: {
            return Object.assign({}, state, {
                roles: [...state.roles, toPayload(action)],
                loading: false
            });
        }

        case RoleActions.UPDATE_ROLE_SUCCESS: {
            let index = _.findIndex(state.roles, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedRoleList = [
                    ...state.roles.slice(0, index),
                    toPayload(action),
                    ...state.roles.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    roles: updatedRoleList,
                    role: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case RoleActions.DELETE_ROLE_SUCCESS: {
            return Object.assign({}, state, {
                roles: state.roles.filter(role => role.id !== toPayload(action).id),
                loading: false
            });
        }

        case RoleActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getRoleList = (state: RoleState) => state.roles;
export const getAllPermissions = (state: RoleState) => state.allPermissions;
export const getRoleListLoading = (state: RoleState) => state.loading;
