import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Permission, CurrentLoginInformation } from '../models';

export const LOAD_GRANTED_PERMISSIONS = '[UserInfo] Load Granted Permissions';
export const LOAD_GRANTED_PERMISSIONS_SUCCESS = '[UserInfo] Load Granted Permissions Success';
export const GET_ALL = '[UserInfo] Get All';
export const GET_ALL_SUCCESS = '[UserInfo] Get All Success';
export const GET_CURRENT_LOGIN_INFORMATION = '[UserInfo] Get Current Login Information';
export const GET_CURRENT_LOGIN_INFORMATION_SUCCESS
  = '[UserInfo] Get Current Login Information Success';
export const FAIL = '[UserInfo] Fail';

export class LoadGrantPermissions implements Action {
  readonly type = LOAD_GRANTED_PERMISSIONS;
}

export class LoadGrantPermissionsSuccess implements Action {
  readonly type = LOAD_GRANTED_PERMISSIONS_SUCCESS;

  constructor(public payload: Permission[]) { }
}

export class GetAll implements Action {
  readonly type = GET_ALL;
}

export class GetAllSuccess implements Action {
  readonly type = GET_ALL_SUCCESS;

  constructor(public payload: Permission[]) { }
}

export class GetCurrentLoginInformation implements Action {
  readonly type = GET_CURRENT_LOGIN_INFORMATION;
}

export class GetCurrentLoginInformationSuccess implements Action {
  readonly type = GET_CURRENT_LOGIN_INFORMATION_SUCCESS;

  constructor(public payload: CurrentLoginInformation) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadGrantPermissions
  | LoadGrantPermissionsSuccess
  | GetCurrentLoginInformation
  | GetCurrentLoginInformationSuccess
  | Fail;
