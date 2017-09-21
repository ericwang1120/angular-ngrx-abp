import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PolePageRoutingModule } from './pole-page-routing.module';
import { PolePageComponent, PoleTableComponent, PoleEditModalComponent } from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { CoreModule } from '../../core/utilities/pipes/core.module';


@NgModule({
    imports: [
        CommonModule,
        PolePageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
    ],
    declarations: [PolePageComponent, PoleTableComponent, PoleEditModalComponent]
})
export class PolePageModule { }
