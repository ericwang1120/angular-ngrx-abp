// angular
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './index';
import { AuthenticateModule, AuthenticateEffects } from '../modules/authenticate';
import { UserInfoModule, UserInfoEffects } from '../modules/user-info';
import { RoleModule, RoleEffects } from '../modules/role';
import { TenantModule, TenantEffects } from '../modules/tenant';
import { UserModule, UserEffects } from '../modules/user';


@NgModule({
    imports: [
        StoreModule.forRoot(
            reducers,
            { metaReducers }
        ),
        EffectsModule.forRoot([
            AuthenticateEffects,
            UserInfoEffects,
            RoleEffects,
            TenantEffects,
            UserEffects
        ]),

        AuthenticateModule,
        UserInfoModule,
        RoleModule,
        TenantModule,
        UserModule
    ]
})

export class NgrxModule { }
