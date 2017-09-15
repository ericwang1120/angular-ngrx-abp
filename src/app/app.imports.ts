import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgrxModule } from './core/ngrx/ngrx.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

export const APP_IMPORTS = [
  BrowserAnimationsModule,
  NgbModule.forRoot(),
  NgrxModule,
  FormsModule,
  SimpleNotificationsModule,
];
