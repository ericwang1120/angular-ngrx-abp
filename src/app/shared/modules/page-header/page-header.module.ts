import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHeaderComponent } from './page-header.component';
import { CoreModule } from '../../../core/utilities/pipes/core.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
