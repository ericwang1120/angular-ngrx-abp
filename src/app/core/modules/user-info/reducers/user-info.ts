import { Action } from '@ngrx/store';

import * as UserInfoActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';
import { Permission, UserLoginInfoDto, LocalizationDto } from '../models';

export interface UserInfoState {
    grantedPermissions: Permission[];
    loading: boolean;
    userLoginInfo: UserLoginInfoDto;
    localization: LocalizationDto;
}

export const initialState: UserInfoState = {
    grantedPermissions: [],
    loading: false,
    userLoginInfo: {},
    localization: {},
};

export function reducer(state = initialState, action: Action): UserInfoState {
    switch (action.type) {
        case UserInfoActions.LOAD_GRANTED_PERMISSIONS:
        case UserInfoActions.GET_CURRENT_LOGIN_INFORMATION:
        case UserInfoActions.GET_ALL: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case UserInfoActions.LOAD_GRANTED_PERMISSIONS_SUCCESS: {
            return Object.assign({}, state, {
                grantedPermissions: toPayload(action),
                loading: false
            });
        }

        case UserInfoActions.GET_CURRENT_LOGIN_INFORMATION_SUCCESS: {
            return Object.assign({}, state, {
                userLoginInfo: toPayload(action).user,
                loading: false
            });
        }

        case UserInfoActions.GET_ALL_SUCCESS: {
            return Object.assign({}, state, {
                localization: toPayload(action).localization,
                loading: false
            });
        }

        case UserInfoActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }
        default: {
            return state;
        }
    }
}

export const getGrantedPermissionList = (state: UserInfoState) => state.grantedPermissions;
export const getUserLoginInfo = (state: UserInfoState) => state.userLoginInfo;
export const getUserInfoLoading = (state: UserInfoState) => state.loading;
export const getLocalization = (state: UserInfoState) => state.localization;
