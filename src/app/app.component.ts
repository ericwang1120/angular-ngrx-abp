import { Component } from '@angular/core';
import { AppState } from './core/ngrx/index';
import { Store } from '@ngrx/store';
import * as authenticateActions from './core/modules/authenticate/actions';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  constructor(private store: Store<AppState>) {
    store.dispatch({ type: authenticateActions.LOAD_FROM_CACHE });
  }

}
