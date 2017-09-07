import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TenantDto } from '../../../core/modules/tenant/models';

@Component({
    selector: 'app-tenant-edit-modal',
    templateUrl: './tenant-edit-modal.component.html',
    styleUrls: ['./tenant-edit-modal.component.scss'],
    animations: []
})
export class TenantEditModalComponent {
    @ViewChild('content') modal;
    @Output() submit = new EventEmitter();

    closeResult: string;
    modalTitle: string;
    selectedTenant: TenantDto;

    constructor(private modalService: NgbModal) { }

    open(tenant?) {
        this.modalTitle = tenant.id ? 'Update Tenant' : 'Create Tenant';
        this.selectedTenant = tenant;
        this.modalService.open(this.modal);
    }

}
