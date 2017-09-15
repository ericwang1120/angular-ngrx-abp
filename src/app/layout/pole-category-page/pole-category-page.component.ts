import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as poleCategoryActions from '../../core/modules/pole-category/actions';

import { Observable } from 'rxjs';
import { PoleCategoryDto, CreatePoleCategoryDto } from '../../core/modules/pole-category/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { PoleCategoryEditModalComponent } from './pole-category-edit-modal/pole-category-edit-modal.component';

@Component({
    selector: 'app-pole-category-page',
    templateUrl: './pole-category-page.component.html',
    styleUrls: ['./pole-category-page.component.scss'],
    animations: [routerTransition()]
})
export class PoleCategoryPageComponent implements OnInit {
    poleCategoryList$: Observable<PoleCategoryDto[]>;
    poleCategoryListLoading$: Observable<boolean>;

    @ViewChild('poleCategoryEditModalComponent') poleCategoryEditModal: PoleCategoryEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.poleCategoryList$ = store.select(fromRoot.getPoleCategoryList);
        this.poleCategoryListLoading$ = store.select(fromRoot.getPoleCategoryListLoading);
    }

    ngOnInit() {
        this.store.dispatch({ type: poleCategoryActions.LOAD_POLE_CATEGORIES });
    }

    // open poleCategory modal and pass the selected poleCategory if exists
    open(poleCategory?) {
        poleCategory = poleCategory ? Object.assign({}, poleCategory) : new CreatePoleCategoryDto();
        this.poleCategoryEditModal.open(poleCategory);
    }

    submit(poleCategory) {
        this.store.dispatch({
            type: poleCategory.id ? poleCategoryActions.UPDATE_POLE_CATEGORY : poleCategoryActions.ADD_POLE_CATEGORY,
            payload: poleCategory,
        });
    }

    delete(poleCategory) {
        this.store.dispatch({ type: poleCategoryActions.DELETE_POLE_CATEGORY, payload: poleCategory });
    }

}
