import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PoleCategoryDto } from '../../../core/modules/pole-category/models';
import { RoleDto } from '../../../core/modules/role/models/role';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-pole-category-edit-modal',
    templateUrl: './pole-category-edit-modal.component.html',
    styleUrls: ['./pole-category-edit-modal.component.scss'],
    animations: []
})
export class PoleCategoryEditModalComponent {

    @ViewChild('content') modal;
    @Input('allRoles') allRoles: RoleDto[];
    @Output() submit = new EventEmitter();

    poleCategoryDetailsForm: FormGroup;
    code: FormControl;
    name: FormControl;
    description: FormControl;

    modalTitle: string;
    selectedPoleCategory: PoleCategoryDto;
    isUpdating: boolean;

    constructor(private modalService: NgbModal) {

    }

    createFormControls() {
        this.code = new FormControl('', Validators.required);
        this.name = new FormControl('', Validators.required);
        this.description = new FormControl('', Validators.required);
    }

    createForm(isUpdating: boolean) {
        let group = {
            code: this.code,
            name: this.name,
            description: this.description,
        };

        this.poleCategoryDetailsForm = new FormGroup(group);
    }

    // change ngClass
    validatedFormClass(formControlName) {
        let classObject = {
            'has-danger': formControlName.invalid && formControlName.dirty,
            'has-success': formControlName.valid && formControlName.dirty
        };
        return classObject;
    }

    open(poleCategory?) {
        this.modalTitle = poleCategory.id ? 'Update PoleCategory' : 'Create PoleCategory';
        this.isUpdating = poleCategory.id ? true : false;
        this.selectedPoleCategory = poleCategory;
        this.modalService.open(this.modal);
        this.createFormControls();
        this.createForm(this.isUpdating);
    }

    // prevent "expression-has-changed-after-it-was-checked-error"
    get isValidForm() {
        if (this.isUpdating) {
            return this.poleCategoryDetailsForm.dirty ? this.poleCategoryDetailsForm.valid : true;
        }
        return this.poleCategoryDetailsForm.valid;
    }
}
