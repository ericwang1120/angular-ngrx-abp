import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as poleActions from '../../core/modules/pole/actions';
import * as poleCategoryActions from '../../core/modules/pole-category/actions';

import { Observable } from 'rxjs';
import { PoleDto, CreatePoleDto } from '../../core/modules/pole/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { PoleEditModalComponent } from './pole-edit-modal/pole-edit-modal.component';
import { PoleCategoryDto } from '../../core/modules/pole-category/models/pole-category';

@Component({
    selector: 'app-pole-page',
    templateUrl: './pole-page.component.html',
    styleUrls: ['./pole-page.component.scss'],
    animations: [routerTransition()]
})
export class PolePageComponent implements OnInit {
    poleList$: Observable<PoleDto[]>;
    poleCategoryList$: Observable<PoleCategoryDto[]>;
    poleListLoading$: Observable<boolean>;
    poleCategoryListLoading$: Observable<boolean>;

    @ViewChild('poleEditModalComponent') poleEditModal: PoleEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.poleList$ = store.select(fromRoot.getPoleList);
        this.poleListLoading$ = store.select(fromRoot.getPoleListLoading);
        this.poleCategoryList$ = store.select(fromRoot.getPoleCategoryList);
        this.poleCategoryListLoading$ = store.select(fromRoot.getPoleCategoryListLoading);
    }

    ngOnInit() {
        this.store.dispatch({ type: poleActions.LOAD_POLES });
        this.store.dispatch({ type: poleCategoryActions.LOAD_POLE_CATEGORIES });
    }

    // open pole modal and pass the selected pole if exists
    open(pole?) {
        pole = pole ? Object.assign({}, pole) : new CreatePoleDto();
        this.poleEditModal.open(pole);
    }

    submit(pole) {
        this.store.dispatch({
            type: pole.id ? poleActions.UPDATE_POLE : poleActions.ADD_POLE,
            payload: pole,
        });
    }

    delete(pole) {
        this.store.dispatch({ type: poleActions.DELETE_POLE, payload: pole });
    }

}
