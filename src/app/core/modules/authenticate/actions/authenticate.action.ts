import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { AuthenticateDto, AuthenticateResultDto } from '../models';

export const AUTHENTICATE = '[Authenticate] Authenticate';
export const AUTHENTICATE_SUCCESS = '[Authenticate] Authenticate Success';
export const LOGOUT = '[Authenticate] Logout';
export const LOGOUT_SUCCESS = '[Authenticate] Logout Success';
export const AUTHENTICATE_FAIL = '[Authenticate] Authenticate Fail';
export const LOAD_FROM_CACHE = '[Authenticate] Load From Cache';

export class Authenticate implements Action {
  readonly type = AUTHENTICATE;

  constructor(public payload: AuthenticateDto) { }
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public payload: AuthenticateResultDto) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload: AuthenticateResultDto) { }
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
}

export class LoadFromCache implements Action {
  readonly type = LOAD_FROM_CACHE;

  constructor(public payload: AuthenticateResultDto) { }
}

export type All
  = Authenticate
  | AuthenticateSuccess
  | Logout
  | LogoutSuccess
  | AuthenticateFail
  | LoadFromCache;
