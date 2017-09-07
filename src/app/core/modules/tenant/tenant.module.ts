// angular
import { NgModule } from '@angular/core';

// providers
import { TENANT_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...TENANT_PROVIDERS
  ],

})
export class TenantModule {
}
