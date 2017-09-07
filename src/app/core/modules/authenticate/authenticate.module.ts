// angular
import { NgModule } from '@angular/core';

// providers
import { AUTHENTICATE_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...AUTHENTICATE_PROVIDERS
  ],

})
export class AuthenticateModule {
}
