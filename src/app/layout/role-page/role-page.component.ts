import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as roleActions from '../../core/modules/role/actions';
import { Observable } from 'rxjs';
import { RoleDto, CreateRoleDto, PermissionDto } from '../../core/modules/role/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { RoleEditModalComponent } from './role-edit-modal/role-edit-modal.component';

@Component({
    selector: 'app-role-page',
    templateUrl: './role-page.component.html',
    styleUrls: ['./role-page.component.scss'],
    animations: [routerTransition()]
})
export class RolePageComponent implements OnInit {
    roleList$: Observable<RoleDto[]>;
    allPermissions$: Observable<PermissionDto[]>;
    roleListLoading$: Observable<boolean>;

    @ViewChild('roleEditModalComponent') roleEditModal: RoleEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.roleList$ = store.select(fromRoot.getRoleList);
        this.allPermissions$ = store.select(fromRoot.getAllPermissions);
        this.roleListLoading$ = store.select(fromRoot.getRoleListLoading);
    }

    ngOnInit() {
        this.store.dispatch({ type: roleActions.LOAD_ROLES });
        this.store.dispatch({ type: roleActions.LOAD_ALL_PERMISSIONS });
    }

    // open role modal and pass the selected role if exists
    open(role?) {
        role = role ? Object.assign({}, role) : new CreateRoleDto();
        this.roleEditModal.open(role);
    }

    submit(role) {
        this.store.dispatch({
            type: role.id ? roleActions.UPDATE_ROLE : roleActions.ADD_ROLE,
            payload: role,
        });
    }

    delete(role) {
        this.store.dispatch({
            type: roleActions.DELETE_ROLE,
            payload: role,
        });
    }

}
