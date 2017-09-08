import { AuthGuard } from './shared';
import { NotificationsService } from 'angular2-notifications';

export const APP_PROVIDERS = [
  AuthGuard,
  NotificationsService,
];
