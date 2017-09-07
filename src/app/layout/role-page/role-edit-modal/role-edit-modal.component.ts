import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RoleDto, PermissionDto } from '../../../core/modules/role/models';

@Component({
    selector: 'app-role-edit-modal',
    templateUrl: './role-edit-modal.component.html',
    styleUrls: ['./role-edit-modal.component.scss'],
    animations: []
})
export class RoleEditModalComponent {
    @ViewChild('content') modal;
    @Input('allPermissions') allPermissions: PermissionDto[];
    @Output() submit = new EventEmitter();

    closeResult: string;
    modalTitle: string;
    selectedRole: RoleDto;

    constructor(private modalService: NgbModal) { }

    open(role?) {
        this.modalTitle = role.id ? 'Update Role' : 'Create Role';
        this.selectedRole = role;
        this.modalService.open(this.modal);
    }

    get permissionsWithGrantedStatus() {
        let selectedPermissions = this.selectedRole.permissions;
        return this.allPermissions.map(permission => {
            if (selectedPermissions.indexOf(permission.name) !== -1) {
                return Object.assign({}, permission, { granted: true });
            }
            return Object.assign({}, permission, { granted: false });
        });
    }

    selectPermission(selectedPermission) {
        let index = this.selectedRole.permissions.indexOf(selectedPermission.name);
        if (index === -1) {
            this.selectedRole.permissions = [
                ...this.selectedRole.permissions,
                selectedPermission.name
            ];
        } else {
            this.selectedRole.permissions =
                this.selectedRole.permissions.filter(permission =>
                    permission !== selectedPermission.name);
        }
    }

}
