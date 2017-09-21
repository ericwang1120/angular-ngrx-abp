import { NgModule } from '@angular/core';
import { TranslatePipe, NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe } from './index';

@NgModule({
    imports: [

    ],
    declarations: [
        NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe, TranslatePipe
    ],
    exports: [TranslatePipe, NamePipe, PivotPipe, WithFirstCharPipe, ConcatToStringPipe],
    providers: []
})
export class CoreModule { }
