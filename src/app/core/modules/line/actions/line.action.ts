import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { LineDto, CreateLineDto, PagedResultDtoOfLineDto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_LINES = '[Line] Load Lines';
export const LOAD_LINES_SUCCESS = '[Line] Load Lines Success';
export const GET_LINE = '[Line] Get Line';
export const GET_LINE_SUCCESS = '[Line] Get Line Success';
export const UPDATE_LINE = '[Line] Update Line';
export const UPDATE_LINE_SUCCESS = '[Line] Update Line Success';
export const ADD_LINE = '[Line] Add Line';
export const ADD_LINE_SUCCESS = '[Line] Add Line Success';
export const DELETE_LINE = '[Line] Delete Line';
export const DELETE_LINE_SUCCESS = '[Line] Delete Line Success';
export const FAIL = '[Line] Fail';

export class LoadLines implements Action {
  readonly type = LOAD_LINES;

  constructor(public payload: PagedRequestDto) { }
}

export class LoadLinesSuccess implements Action {
  readonly type = LOAD_LINES_SUCCESS;

  constructor(public payload: PagedResultDtoOfLineDto) { }
}

export class GetLine implements Action {
  readonly type = GET_LINE;

  constructor(public payload: number) { }
}

export class GetLineSuccess implements Action {
  readonly type = GET_LINE_SUCCESS;

  constructor(public payload: LineDto) { }
}

export class UpdateLine implements Action {
  readonly type = UPDATE_LINE;

  constructor(public payload: LineDto) { }
}

export class UpdateLineSuccess implements Action {
  readonly type = UPDATE_LINE_SUCCESS;

  constructor(public payload: LineDto) { }
}

export class AddLine implements Action {
  readonly type = ADD_LINE;

  constructor(public payload: CreateLineDto) { }
}

export class AddLineSuccess implements Action {
  readonly type = ADD_LINE_SUCCESS;

  constructor(public payload: LineDto) { }
}

export class DeleteLine implements Action {
  readonly type = DELETE_LINE;

  constructor(public payload: LineDto) { }
}

export class DeleteLineSuccess implements Action {
  readonly type = DELETE_LINE_SUCCESS;

  constructor(public payload: LineDto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = LoadLines
  | LoadLinesSuccess
  | AddLineSuccess
  | UpdateLine
  | UpdateLineSuccess
  | AddLine
  | AddLineSuccess
  | DeleteLine
  | DeleteLineSuccess
  | Fail;
