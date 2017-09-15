import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as PoleActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { PoleService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PoleEffects {

    @Effect() loadPoles$ = this.action$.ofType(PoleActions.LOAD_POLES)
        .switchMap(() =>
            this.service.loadPoles()
                .map(poles => ({ type: PoleActions.LOAD_POLES_SUCCESS, payload: poles }))
                .catch(() => of({ type: PoleActions.FAIL }))
        );

    @Effect() getPole$ = this.action$.ofType(PoleActions.GET_POLE)
        .map(toPayload)
        .switchMap(id =>
            this.service.getPole(id)
                .map(pole => ({ type: PoleActions.GET_POLE_SUCCESS, payload: pole }))
                .catch(() => of({ type: PoleActions.FAIL }))
        );

    @Effect() updatePole$ = this.action$.ofType(PoleActions.UPDATE_POLE)
        .map(toPayload)
        .mergeMap(pole =>
            this.service.updatePole(pole)
                .mergeMap(updatedPole => (
                    Observable.from([
                        { type: PoleActions.UPDATE_POLE_SUCCESS, payload: updatedPole },
                    ])
                ))
                .catch(() => of({ type: PoleActions.FAIL }))
        );

    @Effect() addPole$ = this.action$.ofType(PoleActions.ADD_POLE)
        .map(toPayload)
        .mergeMap(pole => this.service.createPole(pole)
            .mergeMap(createdPole => (
                Observable.from([
                    { type: PoleActions.ADD_POLE_SUCCESS, payload: createdPole },
                ])
            ))
            .catch(() => of({ type: PoleActions.FAIL }))
        );

    @Effect() deletePole$ = this.action$.ofType(PoleActions.DELETE_POLE)
        .map(toPayload)
        .mergeMap(pole => this.service.deletePole(pole)
            .mergeMap(deletedPole =>
                Observable.from([
                    { type: PoleActions.DELETE_POLE_SUCCESS, payload: deletedPole },
                ])
            )
            .catch(() => of({ type: PoleActions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: PoleService,
    ) { }
}

