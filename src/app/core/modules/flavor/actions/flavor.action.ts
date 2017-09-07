import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Flavor } from '../models';

export const LOAD_FLAVORS = '[Flavor] Load Flavors';
export const LOAD_FLAVORS_SUCCESS = '[Flavor] Load Flavors Success';
export const UPDATE_FLAVOR = '[Flavor] Update Flavor';
export const UPDATE_FLAVOR_SUCCESS = '[Flavor] Update Flavor Success';
export const ADD_FLAVOR = '[Flavor] Add Flavor';
export const ADD_FLAVOR_SUCCESS = '[Flavor] Add Flavor Success';
export const DELETE_FLAVOR = '[Flavor] Delete Flavor';
export const DELETE_FLAVOR_SUCCESS = '[Flavor] Delete Flavor Success';
export const FAIL = '[Flavor] Fail';

export class LoadFlavors implements Action {
  readonly type = LOAD_FLAVORS;
}

export class LoadFlavors_Success implements Action {
  readonly type = LOAD_FLAVORS_SUCCESS;

  constructor(public payload: Flavor[]) { }
}

export class UpdateFlavor implements Action {
  readonly type = UPDATE_FLAVOR;

  constructor(public payload: Flavor) { }
}

export class UpdateFlavorSuccess implements Action {
  readonly type = UPDATE_FLAVOR_SUCCESS;

  constructor(public payload: Flavor) { }
}

export class AddFlavor implements Action {
  readonly type = ADD_FLAVOR;

  constructor(public payload: Flavor) { }
}

export class AddFlavorSuccess implements Action {
  readonly type = ADD_FLAVOR_SUCCESS;

  constructor(public payload: Flavor) { }
}

export class DeleteFlavor implements Action {
  readonly type = DELETE_FLAVOR;

  constructor(public payload: Flavor) { }
}

export class DeleteFlavorSuccess implements Action {
  readonly type = DELETE_FLAVOR_SUCCESS;

  constructor(public payload: Flavor) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadFlavors
  | LoadFlavors_Success
  | UpdateFlavor
  | UpdateFlavorSuccess
  | AddFlavor
  | AddFlavorSuccess
  | DeleteFlavor
  | DeleteFlavorSuccess
  | Fail;
