import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgrxModule } from './core/ngrx/ngrx.module';

export const APP_IMPORTS = [
  BrowserAnimationsModule,
  NgbModule.forRoot(),
  ReactiveFormsModule,
  NgrxModule,
  FormsModule
];

