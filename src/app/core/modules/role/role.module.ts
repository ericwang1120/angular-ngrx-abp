// angular
import { NgModule } from '@angular/core';

//providers
import { ROLE_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...ROLE_PROVIDERS
  ],

})
export class RoleModule {
}
