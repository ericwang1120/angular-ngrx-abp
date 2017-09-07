import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { TenantDto, CreateTenantDto, PagedResultDtoOfTenantDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_TENANTS = '[Tenant] Load Tenants';
export const LOAD_TENANTS_SUCCESS = '[Tenant] Load Tenants Success';
export const GET_TENANT = '[Tenant] Get Tenant';
export const GET_TENANT_SUCCESS = '[Tenant] Get Tenant Success';
export const UPDATE_TENANT = '[Tenant] Update Tenant';
export const UPDATE_TENANT_SUCCESS = '[Tenant] Update Tenant Success';
export const ADD_TENANT = '[Tenant] Add Tenant';
export const ADD_TENANT_SUCCESS = '[Tenant] Add Tenant Success';
export const DELETE_TENANT = '[Tenant] Delete Tenant';
export const DELETE_TENANT_SUCCESS = '[Tenant] Delete Tenant Success';
export const FAIL = '[Tenant] Fail';

export class LoadTenants implements Action {
  readonly type = LOAD_TENANTS;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadTenantsSuccess implements Action {
  readonly type = LOAD_TENANTS_SUCCESS;

  constructor(public payload: PagedResultDtoOfTenantDto) { }
}

export class GetTenant implements Action {
  readonly type = GET_TENANT;

  constructor(public payload: number) { }
}

export class GetTenantSuccess implements Action {
  readonly type = GET_TENANT_SUCCESS;

  constructor(public payload: TenantDto) { }
}

export class UpdateTenant implements Action {
  readonly type = UPDATE_TENANT;

  constructor(public payload: TenantDto) { }
}

export class UpdateTenantSuccess implements Action {
  readonly type = UPDATE_TENANT_SUCCESS;

  constructor(public payload: TenantDto) { }
}

export class AddTenant implements Action {
  readonly type = ADD_TENANT;

  constructor(public payload: CreateTenantDto) { }
}

export class AddTenantSuccess implements Action {
  readonly type = ADD_TENANT_SUCCESS;

  constructor(public payload: TenantDto) { }
}

export class DeleteTenant implements Action {
  readonly type = DELETE_TENANT;

  constructor(public payload: TenantDto) { }
}

export class DeleteTenantSuccess implements Action {
  readonly type = DELETE_TENANT_SUCCESS;

  constructor(public payload: TenantDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadTenants
  | LoadTenantsSuccess
  | AddTenantSuccess
  | UpdateTenant
  | UpdateTenantSuccess
  | AddTenant
  | AddTenantSuccess
  | DeleteTenant
  | DeleteTenantSuccess
  | Fail;
