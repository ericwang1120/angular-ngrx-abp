import { Action } from '@ngrx/store';

import { PagedResultDtoOfPoleCategoryDto, PoleCategoryDto } from '../models';
import * as PoleCategoryActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface PoleCategoryState {
    poleCategories: PoleCategoryDto[];
    totalCount: number;
    poleCategory: PoleCategoryDto;
    loading: boolean;
}

export const initialState: PoleCategoryState = {
    poleCategories: [],
    poleCategory: null,
    totalCount: 0,
    loading: false,
};

export function reducer(state = initialState, action: Action): PoleCategoryState {
    switch (action.type) {
        case PoleCategoryActions.LOAD_POLECATEGORIES:
        case PoleCategoryActions.GET_POLECATEGORY:
        case PoleCategoryActions.ADD_POLECATEGORY:
        case PoleCategoryActions.DELETE_POLECATEGORY:
        case PoleCategoryActions.UPDATE_POLECATEGORY: {
            return Object.assign({}, state, {
                loading: true,
            });
        }

        case PoleCategoryActions.LOAD_POLECATEGORIES_SUCCESS: {
            return Object.assign({}, state, {
                poleCategories: toPayload(action).items,
                totalCount: toPayload(action).totalCount,
                loading: false
            });
        }


        case PoleCategoryActions.GET_POLECATEGORY_SUCCESS: {
            return Object.assign({}, state, {
                poleCategory: toPayload(action),
                loading: false
            });
        }

        case PoleCategoryActions.ADD_POLECATEGORY_SUCCESS: {
            return Object.assign({}, state, {
                poleCategories: [...state.poleCategories, toPayload(action)],
                loading: false
            });
        }

        case PoleCategoryActions.UPDATE_POLECATEGORY_SUCCESS: {
            let index = _.findIndex(state.poleCategories, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedPoleCategoryList = [
                    ...state.poleCategories.slice(0, index),
                    toPayload(action),
                    ...state.poleCategories.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    poleCategories: updatedPoleCategoryList,
                    poleCategory: toPayload(action),
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }

        case PoleCategoryActions.DELETE_POLECATEGORY_SUCCESS: {
            return Object.assign({}, state, {
                poleCategories: state.poleCategories.filter(poleCategory => poleCategory.id !== toPayload(action).id),
                loading: false
            });
        }

        case PoleCategoryActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const getPoleCategoryList = (state: PoleCategoryState) => state.poleCategories;
export const getPoleCategoryListLoading = (state: PoleCategoryState) => state.loading;
