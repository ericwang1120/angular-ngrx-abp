import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { PoleDto, CreatePoleDto, PagedResultDtoOfPoleDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_POLES = '[Pole] Load Poles';
export const LOAD_POLES_SUCCESS = '[Pole] Load Poles Success';
export const GET_POLE = '[Pole] Get Pole';
export const GET_POLE_SUCCESS = '[Pole] Get Pole Success';
export const UPDATE_POLE = '[Pole] Update Pole';
export const UPDATE_POLE_SUCCESS = '[Pole] Update Pole Success';
export const ADD_POLE = '[Pole] Add Pole';
export const ADD_POLE_SUCCESS = '[Pole] Add Pole Success';
export const DELETE_POLE = '[Pole] Delete Pole';
export const DELETE_POLE_SUCCESS = '[Pole] Delete Pole Success';
export const FAIL = '[Pole] Fail';

export class LoadPoles implements Action {
  readonly type = LOAD_POLES;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadPolesSuccess implements Action {
  readonly type = LOAD_POLES_SUCCESS;

  constructor(public payload: PagedResultDtoOfPoleDto) { }
}

export class GetPole implements Action {
  readonly type = GET_POLE;

  constructor(public payload: number) { }
}

export class GetPoleSuccess implements Action {
  readonly type = GET_POLE_SUCCESS;

  constructor(public payload: PoleDto) { }
}

export class UpdatePole implements Action {
  readonly type = UPDATE_POLE;

  constructor(public payload: PoleDto) { }
}

export class UpdatePoleSuccess implements Action {
  readonly type = UPDATE_POLE_SUCCESS;

  constructor(public payload: PoleDto) { }
}

export class AddPole implements Action {
  readonly type = ADD_POLE;

  constructor(public payload: CreatePoleDto) { }
}

export class AddPoleSuccess implements Action {
  readonly type = ADD_POLE_SUCCESS;

  constructor(public payload: PoleDto) { }
}

export class DeletePole implements Action {
  readonly type = DELETE_POLE;

  constructor(public payload: PoleDto) { }
}

export class DeletePoleSuccess implements Action {
  readonly type = DELETE_POLE_SUCCESS;

  constructor(public payload: PoleDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadPoles
  | LoadPolesSuccess
  | AddPoleSuccess
  | UpdatePole
  | UpdatePoleSuccess
  | AddPole
  | AddPoleSuccess
  | DeletePole
  | DeletePoleSuccess
  | Fail;
