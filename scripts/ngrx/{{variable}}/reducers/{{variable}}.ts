import { Action } from '@ngrx/store';

import { PagedResultDtoOf{{Variable}}Dto, {{Variable}}Dto } from '../models';
import * as {{Variable}}Actions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface {{Variable}}State {
    {{variables}}: {{Variable}}Dto[];
    totalCount: number;
    {{variable}}: {{Variable}}Dto;
    loading: boolean;
}

export const initialState: {{Variable}}State = {
    {{variables}}: [],
    {{variable}}: null,
    totalCount: 0,
    loading: false,
};

export function reducer(state = initialState, action: Action): {{Variable}}State {
    switch (action.type) {
        case {{Variable}}Actions.LOAD_{{VARIABLES}}:
        case {{Variable}}Actions.GET_{{VARIABLE}}:
        case {{Variable}}Actions.ADD_{{VARIABLE}}:
        case {{Variable}}Actions.DELETE_{{VARIABLE}}:
        case {{Variable}}Actions.UPDATE_{{VARIABLE}}: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case {{Variable}}Actions.LOAD_{{VARIABLES}}_SUCCESS: {
            return Object.assign({}, state, {
                {{variables}}: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }


        case {{Variable}}Actions.GET_{{VARIABLE}}_SUCCESS: {
            return Object.assign({}, state, {
                {{variable}}: toPayload(action),
                loading: false
            });
        }

        case {{Variable}}Actions.ADD_{{VARIABLE}}_SUCCESS: {
            return Object.assign({}, state, {
                {{variables}}: [...state.{{variables}}, toPayload(action)],
                loading: false
            });
        }

        case {{Variable}}Actions.UPDATE_{{VARIABLE}}_SUCCESS: {
            let index = _.findIndex(state.{{variables}}, { id: toPayload(action).id });
            if (index >= 0) {
                let updated{{Variable}}List = [
                    ...state.{{variables}}.slice(0, index),
                    toPayload(action),
                    ...state.{{variables}}.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    {{variables}}: updated{{Variable}}List,
                    {{variable}}: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case {{Variable}}Actions.DELETE_{{VARIABLE}}_SUCCESS: {
            return Object.assign({}, state, {
                {{variables}}: state.{{variables}}.filter({{variable}} => {{variable}}.id !== toPayload(action).id),
                loading: false
            });
        }

        case {{Variable}}Actions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const get{{Variable}}List = (state: {{Variable}}State) => state.{{variables}};
export const get{{Variable}}ListLoading = (state: {{Variable}}State) => state.loading;
