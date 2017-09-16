import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as lineActions from '../../core/modules/line/actions';
import * as poleActions from '../../core/modules/pole/actions';

import { Observable } from 'rxjs';
import { LineDto, CreateLineDto } from '../../core/modules/line/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { LineEditModalComponent } from './line-edit-modal/line-edit-modal.component';
import { PoleDto } from '../../core/modules/pole/models/pole';

@Component({
    selector: 'app-line-page',
    templateUrl: './line-page.component.html',
    styleUrls: ['./line-page.component.scss'],
    animations: [routerTransition()]
})
export class LinePageComponent implements OnInit {
    lineList$: Observable<LineDto[]>;
    lineListLoading$: Observable<boolean>;
    poleList$: Observable<PoleDto[]>;
    poleListLoading$: Observable<boolean>;


    @ViewChild('lineEditModalComponent') lineEditModal: LineEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.lineList$ = store.select(fromRoot.getLineList);
        this.lineListLoading$ = store.select(fromRoot.getLineListLoading);
        this.poleList$ = store.select(fromRoot.getPoleList);
        this.poleListLoading$ = store.select(fromRoot.getPoleListLoading);
    }

    ngOnInit() {
        this.store.dispatch({ type: lineActions.LOAD_LINES });
        this.store.dispatch({ type: poleActions.LOAD_POLES });
    }

    // open line modal and pass the selected line if exists
    open(line?) {
        line = line ? Object.assign({}, line) : new CreateLineDto();
        this.lineEditModal.open(line);
    }

    submit(line) {
        this.store.dispatch({
            type: line.id ? lineActions.UPDATE_LINE : lineActions.ADD_LINE,
            payload: line,
        });
    }

    delete(line) {
        this.store.dispatch({ type: lineActions.DELETE_LINE, payload: line });
    }

}
