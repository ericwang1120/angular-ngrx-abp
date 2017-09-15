import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { PoleCategoryDto, CreatePoleCategoryDto, PagedResultDtoOfPoleCategoryDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_POLE_CATEGORIES = '[PoleCategory] Load Pole Categories';
export const LOAD_POLE_CATEGORIES_SUCCESS = '[PoleCategory] Load Pole Categories Success';
export const GET_POLE_CATEGORY = '[PoleCategory] Get Pole Category';
export const GET_POLE_CATEGORY_SUCCESS = '[PoleCategory] Get Pole Category Success';
export const UPDATE_POLE_CATEGORY = '[PoleCategory] Update Pole Category';
export const UPDATE_POLE_CATEGORY_SUCCESS = '[PoleCategory] Update Pole Category Success';
export const ADD_POLE_CATEGORY = '[PoleCategory] Add Pole Category';
export const ADD_POLE_CATEGORY_SUCCESS = '[PoleCategory] Add Pole Category Success';
export const DELETE_POLE_CATEGORY = '[PoleCategory] Delete Pole Category';
export const DELETE_POLE_CATEGORY_SUCCESS = '[PoleCategory] Delete Pole Category Success';
export const FAIL = '[PoleCategory] Fail';

export class LoadPoleCategories implements Action {
  readonly type = LOAD_POLE_CATEGORIES;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadPoleCategoriesSuccess implements Action {
  readonly type = LOAD_POLE_CATEGORIES_SUCCESS;

  constructor(public payload: PagedResultDtoOfPoleCategoryDto) { }
}

export class GetPoleCategory implements Action {
  readonly type = GET_POLE_CATEGORY;

  constructor(public payload: number) { }
}

export class GetPoleCategorySuccess implements Action {
  readonly type = GET_POLE_CATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class UpdatePoleCategory implements Action {
  readonly type = UPDATE_POLE_CATEGORY;

  constructor(public payload: PoleCategoryDto) { }
}

export class UpdatePoleCategorySuccess implements Action {
  readonly type = UPDATE_POLE_CATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class AddPoleCategory implements Action {
  readonly type = ADD_POLE_CATEGORY;

  constructor(public payload: CreatePoleCategoryDto) { }
}

export class AddPoleCategorySuccess implements Action {
  readonly type = ADD_POLE_CATEGORY_SUCCESS;

  constructor(public payload: PoleCategoryDto) { }
}

export class DeletePoleCategory implements Action {
  readonly type = DELETE_POLE_CATEGORY;

  constructor(public payload: PoleCategoryDto) { }
}

export class DeletePoleCategorySuccess implements Action {
  readonly type = DELETE_POLE_CATEGORY_SUCCESS;

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
