import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/ngrx/index';
import { UserLoginInfoDto, LocalizationDto } from '../../../core/modules/user-info/models';
import { Observable } from 'rxjs/Observable';
import * as authenticateActions from '../../../core/modules/authenticate/actions';
import * as userInfoActions from '../../../core/modules/user-info/actions';
import { LanguageDto } from '../../../core/modules/user-info/models/localization';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userLoginInfo$: Observable<UserLoginInfoDto>;
    localizationInfo$: Observable<LocalizationDto>;

    constructor(public router: Router,
        private store: Store<fromRoot.AppState>) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
        this.userLoginInfo$ = store.select(fromRoot.getUserLoginInfo);
        this.localizationInfo$ = store.select(fromRoot.getLocalization);
    }

    ngOnInit() { }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    // rltAndLtr() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('rtl');
    // }

    logout() {
        this.store.dispatch({ type: authenticateActions.LOGOUT });
    }

    changeLanguage(languageName: string): void {
        localStorage.setItem('localization', languageName);
        this.store.dispatch({ type: userInfoActions.GET_ALL });
    }

    get currentLanguage(): Observable<LanguageDto> {
        return this.localizationInfo$.map(
            localizationInfo => {
                if (localizationInfo.currentLanguage) {
                    return localizationInfo.currentLanguage;
                }
                return {};
            }
        );
    }
}
