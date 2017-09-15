import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as LineActions from '../actions';
import * as UserInfoActions from '../../user-info/actions';

import { LineService } from '../services';
import { Observable } from 'rxjs/Observable';
// import { LayoutActions } from '../../layout/actions/layout.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LineEffects {

    @Effect() loadLines$ = this.action$.ofType(LineActions.LOAD_LINES)
        .switchMap(() =>
            this.service.loadLines()
                .map(lines => ({ type: LineActions.LOAD_LINES_SUCCESS, payload: lines }))
                .catch(() => of({ type: LineActions.FAIL }))
        );

    @Effect() getLine$ = this.action$.ofType(LineActions.GET_LINE)
        .map(toPayload)
        .switchMap(id =>
            this.service.getLine(id)
                .map(line => ({ type: LineActions.GET_LINE_SUCCESS, payload: line }))
                .catch(() => of({ type: LineActions.FAIL }))
        );

    @Effect() updateLine$ = this.action$.ofType(LineActions.UPDATE_LINE)
        .map(toPayload)
        .mergeMap(line =>
            this.service.updateLine(line)
                .mergeMap(updatedLine => (
                    Observable.from([
                        { type: LineActions.UPDATE_LINE_SUCCESS, payload: updatedLine },
                    ])
                ))
                .catch(() => of({ type: LineActions.FAIL }))
        );

    @Effect() addLine$ = this.action$.ofType(LineActions.ADD_LINE)
        .map(toPayload)
        .mergeMap(line => this.service.createLine(line)
            .mergeMap(createdLine => (
                Observable.from([
                    { type: LineActions.ADD_LINE_SUCCESS, payload: createdLine },
                ])
            ))
            .catch(() => of({ type: LineActions.FAIL }))
        );

    @Effect() deleteLine$ = this.action$.ofType(LineActions.DELETE_LINE)
        .map(toPayload)
        .mergeMap(line => this.service.deleteLine(line)
            .mergeMap(deletedLine =>
                Observable.from([
                    { type: LineActions.DELETE_LINE_SUCCESS, payload: deletedLine },
                ])
            )
            .catch(() => of({ type: LineActions.FAIL }))
        );

    constructor(
        private action$: Actions,
        private service: LineService,
    ) { }
}

