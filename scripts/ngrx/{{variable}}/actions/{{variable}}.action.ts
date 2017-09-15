import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { {{Variable}}Dto, Create{{Variable}}Dto, PagedResultDtoOf{{Variable}}Dto } from '../models';
import { PagedRequestDto } from '../../../utilities/base-classes/paged-request';

export const LOAD_{{VARIABLES}} = '[{{Variable}}] Load {{Variables}}';
export const LOAD_{{VARIABLES}}_SUCCESS = '[{{Variable}}] Load {{Variables}} Success';
export const GET_{{VARIABLE}} = '[{{Variable}}] Get {{Variable}}';
export const GET_{{VARIABLE}}_SUCCESS = '[{{Variable}}] Get {{Variable}} Success';
export const UPDATE_{{VARIABLE}} = '[{{Variable}}] Update {{Variable}}';
export const UPDATE_{{VARIABLE}}_SUCCESS = '[{{Variable}}] Update {{Variable}} Success';
export const ADD_{{VARIABLE}} = '[{{Variable}}] Add {{Variable}}';
export const ADD_{{VARIABLE}}_SUCCESS = '[{{Variable}}] Add {{Variable}} Success';
export const DELETE_{{VARIABLE}} = '[{{Variable}}] Delete {{Variable}}';
export const DELETE_{{VARIABLE}}_SUCCESS = '[{{Variable}}] Delete {{Variable}} Success';
export const FAIL = '[{{Variable}}] Fail';

export class Load{{Variables}} implements Action {
  readonly type = LOAD_{{VARIABLES}};

  constructor(public payload: PagedRequestDto) { }
}

export class Load{{Variables}}Success implements Action {
  readonly type = LOAD_{{VARIABLES}}_SUCCESS;

  constructor(public payload: PagedResultDtoOf{{Variable}}Dto) { }
}

export class Get{{Variable}} implements Action {
  readonly type = GET_{{VARIABLE}};

  constructor(public payload: number) { }
}

export class Get{{Variable}}Success implements Action {
  readonly type = GET_{{VARIABLE}}_SUCCESS;

  constructor(public payload: {{Variable}}Dto) { }
}

export class Update{{Variable}} implements Action {
  readonly type = UPDATE_{{VARIABLE}};

  constructor(public payload: {{Variable}}Dto) { }
}

export class Update{{Variable}}Success implements Action {
  readonly type = UPDATE_{{VARIABLE}}_SUCCESS;

  constructor(public payload: {{Variable}}Dto) { }
}

export class Add{{Variable}} implements Action {
  readonly type = ADD_{{VARIABLE}};

  constructor(public payload: Create{{Variable}}Dto) { }
}

export class Add{{Variable}}Success implements Action {
  readonly type = ADD_{{VARIABLE}}_SUCCESS;

  constructor(public payload: {{Variable}}Dto) { }
}

export class Delete{{Variable}} implements Action {
  readonly type = DELETE_{{VARIABLE}};

  constructor(public payload: {{Variable}}Dto) { }
}

export class Delete{{Variable}}Success implements Action {
  readonly type = DELETE_{{VARIABLE}}_SUCCESS;

  constructor(public payload: {{Variable}}Dto) { }
}

export class Fail implements Action {
  readonly type = FAIL;
}

export type All
  = Load{{Variables}}
  | Load{{Variables}}Success
  | Add{{Variable}}Success
  | Update{{Variable}}
  | Update{{Variable}}Success
  | Add{{Variable}}
  | Add{{Variable}}Success
  | Delete{{Variable}}
  | Delete{{Variable}}Success
  | Fail;
