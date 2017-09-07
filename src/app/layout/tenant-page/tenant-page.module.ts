import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { TenantPageRoutingModule } from './tenant-page-routing.module';
import { TenantPageComponent, TenantTableComponent, TenantEditModalComponent } from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';


@NgModule({
    imports: [
        CommonModule,
        TenantPageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
    ],
    declarations: [TenantPageComponent, TenantTableComponent, TenantEditModalComponent]
})
export class TenantPageModule { }
