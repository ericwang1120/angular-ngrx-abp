import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as tenantActions from '../../core/modules/tenant/actions';
import { Observable } from 'rxjs';
import { TenantDto, CreateTenantDto } from '../../core/modules/tenant/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { TenantEditModalComponent } from './tenant-edit-modal/tenant-edit-modal.component';

@Component({
    selector: 'app-tenant-page',
    templateUrl: './tenant-page.component.html',
    styleUrls: ['./tenant-page.component.scss'],
    animations: [routerTransition()]
})
export class TenantPageComponent implements OnInit {
    tenantList$: Observable<TenantDto[]>;
    tenantListLoading$: Observable<boolean>;

    @ViewChild('tenantEditModalComponent') tenantEditModal: TenantEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.tenantList$ = store.select(fromRoot.getTenantList);
        this.tenantListLoading$ = store.select(fromRoot.getTenantListLoading);
    }

    ngOnInit() {
        this.store.dispatch({ type: tenantActions.LOAD_TENANTS });
    }

    // open tenant modal and pass the selected tenant if exists
    open(tenant?) {
        tenant = tenant ? Object.assign({}, tenant) : new CreateTenantDto();
        this.tenantEditModal.open(tenant);
    }

    submit(tenant) {
        this.store.dispatch({
            type: tenant.id ? tenantActions.UPDATE_TENANT : tenantActions.ADD_TENANT,
            payload: tenant,
        });
    }

    delete(tenant) {
        this.store.dispatch({
            type: tenantActions.DELETE_TENANT,
            payload: tenant,
        });
    }

}
