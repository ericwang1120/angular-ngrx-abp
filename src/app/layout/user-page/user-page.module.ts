import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent, UserTableComponent, UserEditModalComponent } from './index';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';


@NgModule({
    imports: [
        CommonModule,
        UserPageRoutingModule,
        NgbModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [UserPageComponent, UserTableComponent, UserEditModalComponent]
})
export class UserPageModule { }
