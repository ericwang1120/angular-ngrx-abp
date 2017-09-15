import { Action } from '@ngrx/store';

import { PagedResultDtoOfLineDto, LineDto } from '../models';
import * as LineActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface LineState {
    lines: LineDto[];
    totalCount: number;
    line: LineDto;
    loading: boolean;
}

export const initialState: LineState = {
    lines: [],
    line: null,
    totalCount: 0,
    loading: false,
};

export function reducer(state = initialState, action: Action): LineState {
    switch (action.type) {
        case LineActions.LOAD_LINES:
        case LineActions.GET_LINE:
        case LineActions.ADD_LINE:
        case LineActions.DELETE_LINE:
        case LineActions.UPDATE_LINE: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case LineActions.LOAD_LINES_SUCCESS: {
            return Object.assign({}, state, {
                lines: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }


        case LineActions.GET_LINE_SUCCESS: {
            return Object.assign({}, state, {
                line: toPayload(action),
                loading: false
            });
        }

        case LineActions.ADD_LINE_SUCCESS: {
            return Object.assign({}, state, {
                lines: [...state.lines, toPayload(action)],
                loading: false
            });
        }

        case LineActions.UPDATE_LINE_SUCCESS: {
            let index = _.findIndex(state.lines, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedLineList = [
                    ...state.lines.slice(0, index),
                    toPayload(action),
                    ...state.lines.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    lines: updatedLineList,
                    line: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case LineActions.DELETE_LINE_SUCCESS: {
            return Object.assign({}, state, {
                lines: state.lines.filter(line => line.id !== toPayload(action).id),
                loading: false
            });
        }

        case LineActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getLineList = (state: LineState) => state.lines;
export const getLineListLoading = (state: LineState) => state.loading;
