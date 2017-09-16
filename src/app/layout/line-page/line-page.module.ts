import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LinePageRoutingModule } from './line-page-routing.module';
import { LinePageComponent, LineTableComponent, LineEditModalComponent } from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { NamePipe } from '../../core/utilities/pipes/name.pipe';


@NgModule({
    imports: [
        CommonModule,
        LinePageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [NamePipe, LinePageComponent, LineTableComponent, LineEditModalComponent]
})
export class LinePageModule { }
