// angular
import { NgModule } from '@angular/core';

// providers
import { USER_INFO_PROVIDERS } from './services';

@NgModule({
  providers: [
    ...USER_INFO_PROVIDERS
  ],

})
export class UserInfoModule {
}
