import { Action } from '@ngrx/store';

import { AuthenticateDto, AuthenticateResultDto } from '../models';
import * as AuthenticateActions from '../actions';
import * as _ from 'lodash';
import { toPayload } from '@ngrx/effects';

export interface AuthenticateState {
    authenticateStatus: AuthenticateResultDto;
    authenticated: boolean;
    loading: boolean;
}

export const initialState: AuthenticateState = {
    authenticateStatus: {
        accessToken: '',
        encryptedAccessToken: '',
        expireInSeconds: null,
        userId: null,
        expireTime: null
    },
    authenticated: false,
    loading: false,
};

export function reducer(state = initialState, action: Action): AuthenticateState {
    switch (action.type) {
        case AuthenticateActions.AUTHENTICATE:
        case AuthenticateActions.LOGOUT:
            {
                return Object.assign({}, state, {
                    loading: true,
                });
            }

        case AuthenticateActions.AUTHENTICATE_SUCCESS: {
            return Object.assign({}, state, {
                authenticateStatus: toPayload(action),
                authenticated: true,
                loading: false
            });
        }

        case AuthenticateActions.LOGOUT_SUCCESS: {
            return Object.assign({}, state, initialState);
        }

        case AuthenticateActions.AUTHENTICATE_FAIL: {
            return Object.assign({}, state, {
                authenticated: false,
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

// for selector
export const getAuthenticateStatus = (state: AuthenticateState) => state.authenticateStatus;
export const getAuthenticated = (state: AuthenticateState) => state.authenticated;
export const getAuthenticateStateLoading = (state: AuthenticateState) => state.loading;
