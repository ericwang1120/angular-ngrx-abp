// angular
import { NgModule } from '@angular/core';

// providers
import { POLECATEGORY_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...POLECATEGORY_PROVIDERS
  ],
})

export class PoleCategoryModule {
}
