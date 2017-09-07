import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TenantEditModalComponent } from '../tenant-edit-modal/tenant-edit-modal.component';
import { TenantDto } from '../../../core/modules/tenant/models/tenant';

@Component({
    selector: 'app-tenant-table',
    templateUrl: './tenant-table.component.html',
    styleUrls: ['./tenant-table.component.scss'],
    animations: []
})
export class TenantTableComponent implements OnInit {
    @Input('tenantList') tenantList: TenantDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();

    constructor() {
    }
    ngOnInit() { }
}
