import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PoleCategoryPageRoutingModule } from './pole-category-page-routing.module';
import {
    PoleCategoryPageComponent,
    PoleCategoryTableComponent,
    PoleCategoryEditModalComponent
} from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';


@NgModule({
    imports: [
        CommonModule,
        PoleCategoryPageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PoleCategoryPageComponent,
        PoleCategoryTableComponent,
        PoleCategoryEditModalComponent
    ]
})
export class PoleCategoryPageModule { }
