import { Action } from '@ngrx/store';

import { PagedResultDtoOfUserDto, UserDto } from '../models';
import * as UserActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';
import { RoleDto } from '../../role/models/role';

export interface UserState {
    users: UserDto[];
    totalCount: number;
    user: UserDto;
    loading: boolean;
    roles: RoleDto[];
}

export const initialState: UserState = {
    users: [],
    user: null,
    totalCount: 0,
    loading: false,
    roles: [],
};

export function reducer(state = initialState, action: Action): UserState {
    switch (action.type) {
        case UserActions.LOAD_USERS:
        case UserActions.GET_ROLES:
        case UserActions.GET_USER:
        case UserActions.ADD_USER:
        case UserActions.DELETE_USER:
        case UserActions.UPDATE_USER: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case UserActions.LOAD_USERS_SUCCESS: {
            return Object.assign({}, state, {
                users: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }

        case UserActions.GET_ROLES_SUCCESS: {
            return Object.assign({}, state, {
                roles: toPayload(action).items,
                loading: false
            });
        }

        case UserActions.GET_USER_SUCCESS: {
            return Object.assign({}, state, {
                user: toPayload(action),
                loading: false
            });
        }

        case UserActions.ADD_USER_SUCCESS: {
            return Object.assign({}, state, {
                users: [...state.users, toPayload(action)],
                loading: false
            });
        }

        case UserActions.UPDATE_USER_SUCCESS: {
            let index = _.findIndex(state.users, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedUserList = [
                    ...state.users.slice(0, index),
                    toPayload(action),
                    ...state.users.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    users: updatedUserList,
                    user: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case UserActions.DELETE_USER_SUCCESS: {
            return Object.assign({}, state, {
                users: state.users.filter(user => user.id !== toPayload(action).id),
                loading: false
            });
        }

        case UserActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getUserList = (state: UserState) => state.users;
export const getRoles = (state: UserState) => state.roles;
export const getUserListLoading = (state: UserState) => state.loading;
