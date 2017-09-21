import { PipeTransform, Pipe } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx/index';
import { Observable } from 'rxjs';
import { LocalizationDto } from '../../modules/user-info/models/localization';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    localizationObject$: Observable<LocalizationDto>;

    constructor(private store: Store<fromRoot.AppState>) {
        this.localizationObject$ = store.select(fromRoot.getLocalization);
    }

    transform(args: string) {
        return this.localizationObject$.map(
            localizationObject => {
                if (localizationObject.values && localizationObject.values.MyProject[args]) {
                    return localizationObject.values.MyProject[args];
                }
                return args;
            }
        );
    }
}
