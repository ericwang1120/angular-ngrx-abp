import { Action } from '@ngrx/store';

import { Flavor } from '../models';
import * as FlavorActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface FlavorState {
    flavors: Flavor[];
    loading: boolean;
}

export const initialState: FlavorState = {
    flavors: [],
    loading: false
};

export function reducer(state = initialState, action: Action): FlavorState {
    switch (action.type) {
        case FlavorActions.LOAD_FLAVORS:
        case FlavorActions.ADD_FLAVOR:
        case FlavorActions.DELETE_FLAVOR:
        case FlavorActions.UPDATE_FLAVOR: {
            return Object.assign({}, state, {
                loading: toPayload(action),
            });
        }

        case FlavorActions.LOAD_FLAVORS_SUCCESS: {
            return Object.assign({}, state, {
                flavors: toPayload(action),
                loading: false
            });
        }
        case FlavorActions.ADD_FLAVOR_SUCCESS: {
            return Object.assign({}, state, {
                flavors: [...state.flavors, toPayload(action)],
                loading: false
            });
        }
        case FlavorActions.UPDATE_FLAVOR_SUCCESS: {
            let index = _.findIndex(state.flavors, { id: toPayload(action).id });
            if (index >= 0) {
                let updatedFlavorList = [
                    ...state.flavors.slice(0, index),
                    toPayload(action),
                    ...state.flavors.slice(index + 1)
                ];
                return Object.assign({}, state, {
                    flavors: updatedFlavorList,
                    loading: false
                });
            }
            return Object.assign({}, state, { loading: false });
        }
        case FlavorActions.DELETE_FLAVOR_SUCCESS: {
            return Object.assign({}, state, {
                flavors: state.flavors.filter(flavor => flavor.id != toPayload(action).id),
                loading: false
            });
        }
        case FlavorActions.FAIL: {
            return Object.assign({}, state, {
                loading: false
            });
        }
        default: {
            return state;
        }
    }
}

export const getFlavorList = (state: FlavorState) => state.flavors;
export const getFlavorListLoading = (state: FlavorState) => state.loading;