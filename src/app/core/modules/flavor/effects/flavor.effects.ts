import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as FlavorActions from '../actions';
import { FlavorService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { LoadFlavors, ADD_FLAVOR_SUCCESS } from '../actions/flavor.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FlavorEffects {
    constructor(
        private action$: Actions,
        private service: FlavorService,
    ) { }

    @Effect() loadFlavors$ = this.action$.ofType(FlavorActions.LOAD_FLAVORS)
        .switchMap(() =>
            this.service.getFlavors()
                .map(flavors => ({ type: FlavorActions.LOAD_FLAVORS_SUCCESS, payload: flavors }))
                .catch(() => of({ type: FlavorActions.FAIL }))
        );

    @Effect() updateFlavor$ = this.action$.ofType(FlavorActions.UPDATE_FLAVOR)
        .map(toPayload)
        .mergeMap(flavor =>
            this.service.updateFlavor(flavor)
                .map(flavor => ({ type: FlavorActions.UPDATE_FLAVOR_SUCCESS, payload: flavor }))
                .catch(() => of({ type: FlavorActions.FAIL }))
        );

    @Effect() addFlavor$ = this.action$.ofType(FlavorActions.ADD_FLAVOR)
        .map(toPayload)
        .mergeMap(flavor => this.service.createFlavor(flavor)
            .map(flavor => ({type:FlavorActions.ADD_FLAVOR_SUCCESS,payload:flavor}))
            .catch(() => of({ type: FlavorActions.FAIL }))
        );

    @Effect() deleteFlavor$ = this.action$.ofType(FlavorActions.DELETE_FLAVOR)
        .map(toPayload)
        .mergeMap(flavor => this.service.deleteFlavor(flavor)
            .map(flavor => ({type:FlavorActions.DELETE_FLAVOR_SUCCESS,payload:flavor}))
            .catch(() => of({ type: FlavorActions.FAIL }))
        );
}
