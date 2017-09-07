//angular
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './index';
import { FlavorModule, FlavorEffects } from '../modules/flavor';
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
            FlavorEffects, AuthenticateEffects, UserInfoEffects, RoleEffects, TenantEffects, UserEffects
        ]),

        FlavorModule,
        AuthenticateModule,
        UserInfoModule,
        RoleModule,
        TenantModule,
        UserModule
    ]
})

export class NgrxModule { }
