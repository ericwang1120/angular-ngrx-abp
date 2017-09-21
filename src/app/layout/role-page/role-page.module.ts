import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RolePageRoutingModule } from './role-page-routing.module';
import { RolePageComponent, RoleTableComponent, RoleEditModalComponent } from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { CoreModule } from '../../core/utilities/pipes/core.module';


@NgModule({
    imports: [
        CommonModule,
        RolePageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
    ],
    declarations: [RolePageComponent, RoleTableComponent, RoleEditModalComponent]
})
export class RolePageModule { }
