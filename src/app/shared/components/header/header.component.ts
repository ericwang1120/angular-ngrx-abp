import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/ngrx/index';
import { UserLoginInfoDto } from '../../../core/modules/user-info/models/current-login-information';
import { Observable } from 'rxjs/Observable';
import * as authenticateActions from '../../../core/modules/authenticate/actions';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userLoginInfo$: Observable<UserLoginInfoDto>;

    constructor(public router: Router,
        private store: Store<fromRoot.AppState>) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
        this.userLoginInfo$ = store.select(fromRoot.getUserLoginInfo);
    }

    ngOnInit() { }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    logout() {
        this.store.dispatch({ type: authenticateActions.LOGOUT });
    }
}
