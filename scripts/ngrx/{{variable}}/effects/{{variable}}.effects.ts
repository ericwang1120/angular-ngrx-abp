import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as {{Variable}}Actions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { {{Variable}}Service } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class {{Variable}}Effects {

    @Effect() load{{Variables}}$ = this.action$.ofType({{Variable}}Actions.LOAD_{{VARIABLES}})
        .switchMap(() =>
            this.service.load{{Variables}}()
                .map({{variables}} => ({ type: {{Variable}}Actions.LOAD_{{VARIABLES}}_SUCCESS, payload: {{variables}} }))
                .catch(() => of({ type: {{Variable}}Actions.FAIL }))
        );

    @Effect() get{{Variable}}$ = this.action$.ofType({{Variable}}Actions.GET_{{VARIABLE}})
        .map(toPayload)
        .switchMap(id =>
            this.service.get{{Variable}}(id)
                .map({{variable}} => ({ type: {{Variable}}Actions.GET_{{VARIABLE}}_SUCCESS, payload: {{variable}} }))
                .catch(() => of({ type: {{Variable}}Actions.FAIL }))
        );

    @Effect() update{{Variable}}$ = this.action$.ofType({{Variable}}Actions.UPDATE_{{VARIABLE}})
        .map(toPayload)
        .mergeMap({{variable}} =>
            this.service.update{{Variable}}({{variable}})
                .mergeMap(updated{{Variable}} => (
                    Observable.from([
                        { type: {{Variable}}Actions.UPDATE_{{VARIABLE}}_SUCCESS, payload: updated{{Variable}} },
                    ])
                ))
                .catch(() => of({ type: {{Variable}}Actions.FAIL }))
        );

    @Effect() add{{Variable}}$ = this.action$.ofType({{Variable}}Actions.ADD_{{VARIABLE}})
        .map(toPayload)
        .mergeMap({{variable}} => this.service.create{{Variable}}({{variable}})
            .mergeMap(created{{Variable}} => (
                Observable.from([
                    { type: {{Variable}}Actions.ADD_{{VARIABLE}}_SUCCESS, payload: created{{Variable}} },
                ])
            ))
            .catch(() => of({ type: {{Variable}}Actions.FAIL }))
        );

    @Effect() delete{{Variable}}$ = this.action$.ofType({{Variable}}Actions.DELETE_{{VARIABLE}})
        .map(toPayload)
        .mergeMap({{variable}} => this.service.delete{{Variable}}({{variable}})
            .mergeMap(deleted{{Variable}} =>
                Observable.from([
                    { type: {{Variable}}Actions.DELETE_{{VARIABLE}}_SUCCESS, payload: deleted{{Variable}} },
                ])
            )
            .catch(() => of({ type: {{Variable}}Actions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: {{Variable}}Service,
    ) { }
}

