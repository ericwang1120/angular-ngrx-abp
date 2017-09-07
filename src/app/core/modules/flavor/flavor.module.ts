// angular
import { NgModule } from '@angular/core';

//providers
import { FLAVOR_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...FLAVOR_PROVIDERS
  ],

})
export class FlavorModule {
}
