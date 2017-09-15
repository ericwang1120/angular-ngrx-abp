import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as PoleCategoryActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { PoleCategoryService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PoleCategoryEffects {

    @Effect() loadPoleCategories$ = this.action$.ofType(PoleCategoryActions.LOAD_POLECATEGORIES)
        .switchMap(() =>
            this.service.loadPoleCategories()
                .map(poleCategories => ({ type: PoleCategoryActions.LOAD_POLECATEGORIES_SUCCESS, payload: poleCategories }))
                .catch(() => of({ type: PoleCategoryActions.FAIL }))
        );

    @Effect() getPoleCategory$ = this.action$.ofType(PoleCategoryActions.GET_POLECATEGORY)
        .map(toPayload)
        .switchMap(id =>
            this.service.getPoleCategory(id)
                .map(poleCategory => ({ type: PoleCategoryActions.GET_POLECATEGORY_SUCCESS, payload: poleCategory }))
                .catch(() => of({ type: PoleCategoryActions.FAIL }))
        );

    @Effect() updatePoleCategory$ = this.action$.ofType(PoleCategoryActions.UPDATE_POLECATEGORY)
        .map(toPayload)
        .mergeMap(poleCategory =>
            this.service.updatePoleCategory(poleCategory)
                .mergeMap(updatedPoleCategory => (
                    Observable.from([
                        { type: PoleCategoryActions.UPDATE_POLECATEGORY_SUCCESS, payload: updatedPoleCategory },
                    ])
                ))
                .catch(() => of({ type: PoleCategoryActions.FAIL }))
        );

    @Effect() addPoleCategory$ = this.action$.ofType(PoleCategoryActions.ADD_POLECATEGORY)
        .map(toPayload)
        .mergeMap(poleCategory => this.service.createPoleCategory(poleCategory)
            .mergeMap(createdPoleCategory => (
                Observable.from([
                    { type: PoleCategoryActions.ADD_POLECATEGORY_SUCCESS, payload: createdPoleCategory },
                ])
            ))
            .catch(() => of({ type: PoleCategoryActions.FAIL }))
        );

    @Effect() deletePoleCategory$ = this.action$.ofType(PoleCategoryActions.DELETE_POLECATEGORY)
        .map(toPayload)
        .mergeMap(poleCategory => this.service.deletePoleCategory(poleCategory)
            .mergeMap(deletedPoleCategory =>
                Observable.from([
                    { type: PoleCategoryActions.DELETE_POLECATEGORY_SUCCESS, payload: deletedPoleCategory },
                ])
            )
            .catch(() => of({ type: PoleCategoryActions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: PoleCategoryService,
    ) { }
}

