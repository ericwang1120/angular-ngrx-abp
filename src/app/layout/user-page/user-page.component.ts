import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

//ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/index';
import * as userActions from '../../core/modules/user/actions';
import * as authenticateActions from '../../core/modules/authenticate/actions';


import { Observable } from 'rxjs';
import { UserDto, CreateUserDto } from '../../core/modules/user/models';
import { PagedRequestDto } from '../../core/utilities/base-classes/paged-request';
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';
import { RoleDto } from '../../core/modules/role/models/role';
import { UserLoginInfoDto } from '../../core/modules/user-info/models/current-login-information';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
    animations: [routerTransition()]
})
export class UserPageComponent implements OnInit {
    userList$: Observable<UserDto[]>;
    allRoles$: Observable<RoleDto[]>;
    userListLoading$: Observable<boolean>;
    userLoginInfo$: Observable<UserLoginInfoDto>;


    @ViewChild('userEditModalComponent') userEditModal: UserEditModalComponent;

    constructor(private store: Store<fromRoot.AppState>) {
        this.userList$ = store.select(fromRoot.getUserList);
        this.allRoles$ = store.select(fromRoot.getRoles);
        this.userListLoading$ = store.select(fromRoot.getUserListLoading);
        this.userLoginInfo$ = store.select(fromRoot.getUserLoginInfo);
    }

    ngOnInit() {
        this.store.dispatch({ type: userActions.LOAD_USERS });
        this.store.dispatch({ type: userActions.GET_ROLES });
    }

    //open user modal and pass the selected user if exists
    open(user?) {
        user = user ? Object.assign({}, user) : new CreateUserDto();;
        this.userEditModal.open(user);
    }

    submit(user) {
        this.store.dispatch({
            type: user.id ? userActions.UPDATE_USER : userActions.ADD_USER,
            payload: user,
        })
    }

    delete(user) {
        //if the selected user is current user, logout after deleting the user
        let isCurrentUser: boolean = false;
        this.userLoginInfo$.forEach(currentUser => {
            if (currentUser.id === user.id) {
                isCurrentUser = true;
            }
        });

        this.store.dispatch({ type: userActions.DELETE_USER, payload: user });

        if (isCurrentUser) {
            this.store.dispatch({ type: authenticateActions.LOGOUT });
        }
    }

}
