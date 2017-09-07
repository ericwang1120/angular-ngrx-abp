import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const APP_IMPORTS = [
  BrowserAnimationsModule,
  NgbModule.forRoot(),
  ReactiveFormsModule
];

