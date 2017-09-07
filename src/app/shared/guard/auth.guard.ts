import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/ngrx/index';
import * as fromRoot from '../../core/ngrx/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private store: Store<AppState>
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.store.select(fromRoot.getAuthenticateStatus)
            .map((authenticateStatus) => {
                if (authenticateStatus.expireTime > new Date().getTime()) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            });
    }

}
