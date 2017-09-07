import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserDto } from '../../../core/modules/user/models';
import { RoleDto } from '../../../core/modules/role/models/role';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-edit-modal',
    templateUrl: './user-edit-modal.component.html',
    styleUrls: ['./user-edit-modal.component.scss'],
    animations: []
})
export class UserEditModalComponent {


    @ViewChild('content') modal;
    @Input('allRoles') allRoles: RoleDto[];
    @Output() submit = new EventEmitter();

    userDetailsForm: FormGroup;
    userName: FormControl;
    name: FormControl;
    surname: FormControl;
    emailAddress: FormControl;
    password: FormControl;
    confirmPassword: FormControl;

    constructor(private modalService: NgbModal) {

    }



    createFormControls() {
        this.userName = new FormControl('', Validators.required);
        this.name = new FormControl('', Validators.required);
        this.surname = new FormControl('', Validators.required);
        this.emailAddress = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.confirmPassword = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
    }

    createForm(isUpdating: boolean) {
        let group = {
            userName: this.userName,
            name: this.name,
            surname: this.surname,
            emailAddress: this.emailAddress
        };

        group = Object.assign(group, !isUpdating ? {
            password: this.password,
            confirmPassword: this.confirmPassword
        } : {});

        this.userDetailsForm = new FormGroup(group);

    }

    private modalTitle: string;
    private selectedUser: UserDto;
    private isUpdating: boolean;
    open(user?) {
        this.modalTitle = user.id ? "Update User" : "Create User";
        this.isUpdating = user.id ? true : false;
        this.selectedUser = user;
        this.modalService.open(this.modal);
        this.createFormControls();
        this.createForm(this.isUpdating);
    }

    //prevent "expression-has-changed-after-it-was-checked-error"
    get isValidForm() {
        if (this.isUpdating) {
           return this.userDetailsForm.dirty ? this.userDetailsForm.valid : true;
        }
        return this.userDetailsForm.valid;
    }

    get rolesWithGrantedStatus() {
        let selectedRoles = this.selectedUser.roleNames;
        return this.allRoles.map(role => {
            if (selectedRoles.indexOf(role.normalizedName) != -1) {
                return Object.assign({}, role, { granted: true });
            }
            else {
                return Object.assign({}, role, { granted: false });
            }
        });
    }

    selectRole(selectedRole) {
        let index = this.selectedUser.roleNames.indexOf(selectedRole.normalizedName);
        if (index == -1) {
            this.selectedUser.roleNames = [
                ...this.selectedUser.roleNames,
                selectedRole.normalizedName
            ];
        } else {
            this.selectedUser.roleNames =
                this.selectedUser.roleNames.filter(role =>
                    role != selectedRole.normalizedName
                )
        }
    }
}
