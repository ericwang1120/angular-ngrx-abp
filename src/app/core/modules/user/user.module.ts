// angular
import { NgModule } from '@angular/core';

// providers
import { USER_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...USER_PROVIDERS
  ],

})
export class UserModule {
}
