import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../core/ngrx/index';
import * as authenticateActions from '../core/modules/authenticate/actions';
import { Observable } from 'rxjs';
import { AuthenticateDto } from '../core/modules/authenticate/models/authenticateDto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    $authenticateStatus: Observable<any>;
    authenticateDto: AuthenticateDto = new AuthenticateDto();

    constructor(public router: Router,
        private store: Store<fromRoot.AppState>,
    ) {
        this.$authenticateStatus = store.select(fromRoot.getAuthenticateStatus);
    }

    ngOnInit() {

    }

    login(userNameOrEmailAddress, password) {
        this.store.dispatch({
            type: authenticateActions.AUTHENTICATE,
            payload: {
                'userNameOrEmailAddress': userNameOrEmailAddress,
                'password': password,
            },
        });
    }
}
