import { compose } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { createSelector } from 'reselect';

// different modules
import * as fromAuthenticate from '../modules/authenticate';
import * as fromUserInfo from '../modules/user-info';
import * as fromRole from '../modules/role';
import * as fromTenant from '../modules/tenant';
import * as fromUser from '../modules/user';
import * as fromPoleCategory from '../modules/pole-category';
import * as fromPole from '../modules/pole';
import * as fromLine from '../modules/line';
import { reducer } from '../modules/pole-category/reducers/pole-category';


export interface AppState {
    authenticate: fromAuthenticate.AuthenticateState;
    userInfo: fromUserInfo.UserInfoState;
    role: fromRole.RoleState;
    tenant: fromTenant.TenantState;
    user: fromUser.UserState;
    poleCategory: fromPoleCategory.PoleCategoryState;
    pole: fromPole.PoleState;
    line: fromLine.LineState;
}

export const reducers: ActionReducerMap<AppState> = {
    authenticate: fromAuthenticate.reducer,
    userInfo: fromUserInfo.reducer,
    role: fromRole.reducer,
    tenant: fromTenant.reducer,
    user: fromUser.reducer,
    poleCategory: fromPoleCategory.reducer,
    pole: fromPole.reducer,
    line: fromLine.reducer,
};

// export const reducers: ActionReducerMap<State> = {
//   auth: fromAuth.reducer,
//   layout: fromLayout.reducer
// };

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger()(reducer);
}

// make sure you export for AoT
export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state: any, action: any) {
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload;
        }
        return reducer(state, action);
    };
}

export const metaReducers =
    (ENV === JSON.stringify('production')) ? [] : [
        // logger,
        storeFreeze,
        stateSetter
    ];

// Authenticate List
export const getAuthenticateState = (state: AppState) => state.authenticate;
export const getAuthenticateStatus
    = createSelector(getAuthenticateState, fromAuthenticate.getAuthenticateStatus);
export const getAuthenticated
    = createSelector(getAuthenticateState, fromAuthenticate.getAuthenticated);
export const getAuthenticateStatusLoading
    = createSelector(getAuthenticateState, fromAuthenticate.getAuthenticateStatusLoading);

// User info list
export const getUserInfoState = (state: AppState) => state.userInfo;
export const getGrantedPermissionList
    = createSelector(getUserInfoState, fromUserInfo.getGrantedPermissionList);
export const getUserLoginInfo = createSelector(getUserInfoState, fromUserInfo.getUserLoginInfo);
export const getLocalization = createSelector(getUserInfoState, fromUserInfo.getLocalization);
export const getUserInfoLoading = createSelector(getUserInfoState, fromUserInfo.getUserInfoLoading);

// Roles
export const getRoleState = (state: AppState) => state.role;
export const getRoleList = createSelector(getRoleState, fromRole.getRoleList);
export const getAllPermissions = createSelector(getRoleState, fromRole.getAllPermissions);
export const getRoleListLoading = createSelector(getRoleState, fromRole.getRoleListLoading);

// Tenants
export const getTenantState = (state: AppState) => state.tenant;
export const getTenantList = createSelector(getTenantState, fromTenant.getTenantList);
export const getTenantListLoading = createSelector(getTenantState, fromTenant.getTenantListLoading);

// Users
export const getUserState = (state: AppState) => state.user;
export const getUserList = createSelector(getUserState, fromUser.getUserList);
export const getRoles = createSelector(getUserState, fromUser.getRoles);
export const getUserListLoading = createSelector(getUserState, fromUser.getUserListLoading);

// Poles
export const getPoleState = (state: AppState) => state.pole;
export const getPoleList = createSelector(getPoleState, fromPole.getPoleList);
export const getPoleListLoading = createSelector(getPoleState, fromPole.getPoleListLoading);

// Pole Categories
export const getPoleCategoryState = (state: AppState) => state.poleCategory;
export const getPoleCategoryList =
    createSelector(getPoleCategoryState, fromPoleCategory.getPoleCategoryList);
export const getPoleCategoryListLoading =
    createSelector(getPoleCategoryState, fromPoleCategory.getPoleCategoryListLoading);

// Lines
export const getLineState = (state: AppState) => state.line;
export const getLineList = createSelector(getLineState, fromLine.getLineList);
export const getLineListLoading = createSelector(getLineState, fromLine.getLineListLoading);


