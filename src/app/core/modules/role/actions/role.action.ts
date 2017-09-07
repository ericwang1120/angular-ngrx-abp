import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { RoleDto, CreateRoleDto, PagedResultDtoOfRoleDto, PermissionDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_ROLES = '[Role] Load Roles';
export const LOAD_ROLES_SUCCESS = '[Role] Load Roles Success';
export const LOAD_ALL_PERMISSIONS = '[Role] Load All Permissions';
export const LOAD_ALL_PERMISSIONS_SUCCESS = '[Role] Load All Permissions Success';
export const GET_ROLE = '[Role] Get Role';
export const GET_ROLE_SUCCESS = '[Role] Get Role Success';
export const UPDATE_ROLE = '[Role] Update Role';
export const UPDATE_ROLE_SUCCESS = '[Role] Update Role Success';
export const ADD_ROLE = '[Role] Add Role';
export const ADD_ROLE_SUCCESS = '[Role] Add Role Success';
export const DELETE_ROLE = '[Role] Delete Role';
export const DELETE_ROLE_SUCCESS = '[Role] Delete Role Success';
export const FAIL = '[Role] Fail';

export class LoadRoles implements Action {
  readonly type = LOAD_ROLES;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadRolesSuccess implements Action {
  readonly type = LOAD_ROLES_SUCCESS;

  constructor(public payload: PagedResultDtoOfRoleDto) { }
}

export class LoadAllPermissions implements Action {
  readonly type = LOAD_ALL_PERMISSIONS;
}

export class LoadAllPermissionsSuccess implements Action {
  readonly type = LOAD_ALL_PERMISSIONS_SUCCESS;

  constructor(public payload: PermissionDto[]) { }
}

export class GetRole implements Action {
  readonly type = GET_ROLE;

  constructor(public payload: number) { }
}

export class GetRoleSuccess implements Action {
  readonly type = GET_ROLE_SUCCESS;

  constructor(public payload: RoleDto) { }
}

export class UpdateRole implements Action {
  readonly type = UPDATE_ROLE;

  constructor(public payload: RoleDto) { }
}

export class UpdateRoleSuccess implements Action {
  readonly type = UPDATE_ROLE_SUCCESS;

  constructor(public payload: RoleDto) { }
}

export class AddRole implements Action {
  readonly type = ADD_ROLE;

  constructor(public payload: CreateRoleDto) { }
}

export class AddRoleSuccess implements Action {
  readonly type = ADD_ROLE_SUCCESS;

  constructor(public payload: RoleDto) { }
}

export class DeleteRole implements Action {
  readonly type = DELETE_ROLE;

  constructor(public payload: RoleDto) { }
}

export class DeleteRoleSuccess implements Action {
  readonly type = DELETE_ROLE_SUCCESS;

  constructor(public payload: RoleDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadRoles
  | LoadRolesSuccess
  | AddRoleSuccess
  | UpdateRole
  | UpdateRoleSuccess
  | AddRole
  | AddRoleSuccess
  | DeleteRole
  | DeleteRoleSuccess
  | Fail;
