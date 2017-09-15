import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { PoleCategoryDto, CreatePoleCategoryDto, PagedResultDtoOfPoleCategoryDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_POLECATEGORIES = '[PoleCategory] Load PoleCategories';
export const LOAD_POLECATEGORIES_SUCCESS = '[PoleCategory] Load PoleCategories Success';
export const GET_POLECATEGORY = '[PoleCategory] Get PoleCategory';
export const GET_POLECATEGORY_SUCCESS = '[PoleCategory] Get PoleCategory Success';
export const UPDATE_POLECATEGORY = '[PoleCategory] Update PoleCategory';
export const UPDATE_POLECATEGORY_SUCCESS = '[PoleCategory] Update PoleCategory Success';
export const ADD_POLECATEGORY = '[PoleCategory] Add PoleCategory';
export const ADD_POLECATEGORY_SUCCESS = '[PoleCategory] Add PoleCategory Success';
export const DELETE_POLECATEGORY = '[PoleCategory] Delete PoleCategory';
export const DELETE_POLECATEGORY_SUCCESS = '[PoleCategory] Delete PoleCategory Success';
export const FAIL = '[PoleCategory] Fail';

export class LoadPoleCategories implements Action {
  readonly type = LOAD_POLECATEGORIES;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadPoleCategoriesSuccess implements Action {
  readonly type = LOAD_POLECATEGORIES_SUCCESS;

  constructor(public payload: PagedResultDtoOfPoleCategoryDto) { }
}

export class GetPoleCategory implements Action {
  readonly type = GET_POLECATEGORY;

  constructor(public payload: number) { }
}

export class GetPoleCategorySuccess implements Action {
  readonly type = GET_POLECATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class UpdatePoleCategory implements Action {
  readonly type = UPDATE_POLECATEGORY;

  constructor(public payload: PoleCategoryDto) { }
}

export class UpdatePoleCategorySuccess implements Action {
  readonly type = UPDATE_POLECATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class AddPoleCategory implements Action {
  readonly type = ADD_POLECATEGORY;

  constructor(public payload: CreatePoleCategoryDto) { }
}

export class AddPoleCategorySuccess implements Action {
  readonly type = ADD_POLECATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class DeletePoleCategory implements Action {
  readonly type = DELETE_POLECATEGORY;

  constructor(public payload: PoleCategoryDto) { }
}

export class DeletePoleCategorySuccess implements Action {
  readonly type = DELETE_POLECATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadPoleCategories
  | LoadPoleCategoriesSuccess
  | AddPoleCategorySuccess
  | UpdatePoleCategory
  | UpdatePoleCategorySuccess
  | AddPoleCategory
  | AddPoleCategorySuccess
  | DeletePoleCategory
  | DeletePoleCategorySuccess
  | Fail;
