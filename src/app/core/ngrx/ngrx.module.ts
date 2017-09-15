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
import { PoleModule, PoleEffects } from '../modules/pole';
import { PoleCategoryModule, PoleCategoryEffects } from '../modules/pole-category';
import { LineModule, LineEffects } from '../modules/line';



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
            UserEffects,
            PoleEffects,
            PoleCategoryEffects,
            LineEffects
        ]),

        AuthenticateModule,
        UserInfoModule,
        RoleModule,
        TenantModule,
        UserModule,
        PoleModule,
        PoleCategoryModule,
        LineModule,
    ]
})

export class NgrxModule { }
