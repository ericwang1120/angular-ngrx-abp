import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { RoleEditModalComponent } from '../role-edit-modal/role-edit-modal.component';
import { RoleDto } from '../../../core/modules/role/models/role';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-role-table',
    templateUrl: './role-table.component.html',
    styleUrls: ['./role-table.component.scss'],
    animations: []
})
export class RoleTableComponent implements OnInit {
    @Input('roleList') roleList: RoleDto[];
    @Output() open = new EventEmitter();
    @Output() delete = new EventEmitter();
    @ViewChild('deleteModal') deleteModal;
    selectedRole: RoleDto;

    constructor(private modalService: NgbModal) {
    }

    openDeleteModal(role) {
        this.selectedRole = role;
        this.modalService.open(this.deleteModal);
    }

    onDelete() {
        this.delete.emit(this.selectedRole);
    }

    ngOnInit() { }
}
