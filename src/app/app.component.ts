import { Component } from '@angular/core';
import { AppState } from './core/ngrx/index';
import { Store } from '@ngrx/store';
import * as authenticateActions from './core/modules/authenticate/actions';
import * as userInfoActions from './core/modules/user-info/actions';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent {

  options = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    lastOnBottom: true,
    showProgressBar: false,
    pauseOnHover: false,
    icons: {
      success: '<i class="fa fa-check fa-2x"></i>',
      error: '<i class="fa fa-close fa-2x"></i>',
      info: '<i class="fa fa-info-circle fa-2x"></i>',
      warn: '<i class="fa fa-info-circle fa-2x"></i>',
      alert: '<i class="fa fa-info-circle fa-2x"></i>',
    },
  };

  constructor(private store: Store<AppState>,
    private _service: NotificationsService) {
    store.dispatch({ type: authenticateActions.LOAD_FROM_CACHE });
    store.dispatch({ type: userInfoActions.GET_ALL });
  }
}
