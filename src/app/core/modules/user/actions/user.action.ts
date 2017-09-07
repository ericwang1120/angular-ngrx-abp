import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { UserDto, CreateUserDto, PagedResultDtoOfUserDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';
import { RoleDto } from '../../role/models/role';

export const LOAD_USERS = '[User] Load Users';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';
export const GET_ROLES = '[User] Get Roles';
export const GET_ROLES_SUCCESS = '[User] Get Roles Success';
export const GET_USER = '[User] Get User';
export const GET_USER_SUCCESS = '[User] Get User Success';
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';
export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';
export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';
export const FAIL = '[User] Fail';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: PagedResultDtoOfUserDto) { }
}

export class GetRoles implements Action {
  readonly type = GET_ROLES;
}

export class GetRolesSuccess implements Action {
  readonly type = GET_ROLES_SUCCESS;

  constructor(public payload: RoleDto[]) { }
}

export class GetUser implements Action {
  readonly type = GET_USER;

  constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;

  constructor(public payload: UserDto) { }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: UserDto) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: UserDto) { }
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: CreateUserDto) { }
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: UserDto) { }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: UserDto) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: UserDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadUsers
  | LoadUsersSuccess
  | GetRoles
  | GetRolesSuccess
  | AddUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | AddUser
  | AddUserSuccess
  | DeleteUser
  | DeleteUserSuccess
  | Fail;
