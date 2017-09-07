import { NgModule } from '@angular/core';
import { NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe } from './index';

@NgModule({
    imports: [

    ],
    declarations: [
        NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe
    ],
    exports: [NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe],
    providers: []
})
export class CoreModule { }
