import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RoleDto, PermissionDto } from '../../../core/modules/role/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    roleDetailsForm: FormGroup;
    name: FormControl;
    displayName: FormControl;
    description: FormControl;

    constructor(private modalService: NgbModal) { }

    createFormControls() {
        this.name = new FormControl('', Validators.required);
        this.displayName = new FormControl('', Validators.required);
        this.description = new FormControl('', Validators.required);
    }

    createForm() {
        let group = {
            name: this.name,
            displayName: this.displayName,
            description: this.description,
        };

        this.roleDetailsForm = new FormGroup(group);

    }

    // change ngClass
    validatedFormClass(formControlName) {
        let classObject = {
            'has-danger': formControlName.invalid && formControlName.dirty,
            'has-success': formControlName.valid && formControlName.dirty
        };
        return classObject;
    }

    open(role?) {
        this.modalTitle = role.id ? 'UpdateRole' : 'CreateRole';
        this.selectedRole = role;
        this.modalService.open(this.modal);
        this.createFormControls();
        this.createForm();
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
