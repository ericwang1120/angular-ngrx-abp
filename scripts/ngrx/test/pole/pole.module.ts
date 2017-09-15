// angular
import { NgModule } from '@angular/core';

// providers
import { POLE_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...POLE_PROVIDERS
  ],
})

export class PoleModule {
}
