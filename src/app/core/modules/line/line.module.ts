// angular
import { NgModule } from '@angular/core';

// providers
import { LINE_PROVIDERS } from './services/index';

@NgModule({
  providers: [
    ...LINE_PROVIDERS
  ],
})

export class LineModule {
}
