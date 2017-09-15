import { Action } from '@ngrx/store';

import { PagedResultDtoOfPoleDto, PoleDto } from '../models';
import * as PoleActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface PoleState {
    poles: PoleDto[];
    totalCount: number;
    pole: PoleDto;
    loading: boolean;
}

export const initialState: PoleState = {
    poles: [],
    pole: null,
    totalCount: 0,
    loading: false,
};

export function reducer(state = initialState, action: Action): PoleState {
    switch (action.type) {
        case PoleActions.LOAD_POLES:
        case PoleActions.GET_POLE:
        case PoleActions.ADD_POLE:
        case PoleActions.DELETE_POLE:
        case PoleActions.UPDATE_POLE: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case PoleActions.LOAD_POLES_SUCCESS: {
            return Object.assign({}, state, {
                poles: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }


        case PoleActions.GET_POLE_SUCCESS: {
            return Object.assign({}, state, {
                pole: toPayload(action),
                loading: false
            });
        }

        case PoleActions.ADD_POLE_SUCCESS: {
            return Object.assign({}, state, {
                poles: [...state.poles, toPayload(action)],
                loading: false
            });
        }

        case PoleActions.UPDATE_POLE_SUCCESS: {
            let index = _.findIndex(state.poles, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedPoleList = [
                    ...state.poles.slice(0, index),
                    toPayload(action),
                    ...state.poles.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    poles: updatedPoleList,
                    pole: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case PoleActions.DELETE_POLE_SUCCESS: {
            return Object.assign({}, state, {
                poles: state.poles.filter(pole => pole.id !== toPayload(action).id),
                loading: false
            });
        }

        case PoleActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getPoleList = (state: PoleState) => state.poles;
export const getPoleListLoading = (state: PoleState) => state.loading;
