// angular
import { NgModule } from '@angular/core';

// providers
import { POLE_CATEGORY_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...POLE_CATEGORY_PROVIDERS
  ],
})

export class PoleCategoryModule {
}
