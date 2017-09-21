import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PoleDto } from '../../../core/modules/pole/models';
import { RoleDto } from '../../../core/modules/role/models/role';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoleCategoryDto } from '../../../core/modules/pole-category/models/pole-category';

@Component({
    selector: 'app-pole-edit-modal',
    templateUrl: './pole-edit-modal.component.html',
    styleUrls: ['./pole-edit-modal.component.scss'],
    animations: []
})
export class PoleEditModalComponent {

    @ViewChild('content') modal;
    @Input('poleCategoryList') poleCategoryList: PoleCategoryDto[];
    @Output() submit = new EventEmitter();

    poleDetailsForm: FormGroup;
    code: FormControl;
    name: FormControl;
    poleCategoryId: FormControl;
    height: FormControl;
    longitude: FormControl;
    latitude: FormControl;
    description: FormControl;

    modalTitle: string;
    selectedPole: PoleDto;
    isUpdating: boolean;

    constructor(private modalService: NgbModal) {

    }

    createFormControls() {
        this.code = new FormControl('', Validators.required);
        this.name = new FormControl('', Validators.required);
        this.poleCategoryId = new FormControl('', Validators.required);
        this.height = new FormControl('', Validators.required);
        this.longitude = new FormControl('', Validators.required);
        this.latitude = new FormControl('', Validators.required);
        this.description = new FormControl('', Validators.required);
    }

    createForm(isUpdating: boolean) {
        let group = {
            code: this.code,
            name: this.name,
            poleCategoryId: this.poleCategoryId,
            height: this.height,
            longitude: this.longitude,
            latitude: this.latitude,
            description: this.description,
        };

        this.poleDetailsForm = new FormGroup(group);
    }

    // change ngClass
    validatedFormClass(formControlName) {
        let classObject = {
            'has-danger': formControlName.invalid && formControlName.dirty,
            'has-success': formControlName.valid && formControlName.dirty
        };
        return classObject;
    }

    open(pole?) {
        this.modalTitle = pole.id ? 'Update' : 'Create';
        this.isUpdating = pole.id ? true : false;
        this.selectedPole = pole;
        this.modalService.open(this.modal);
        this.createFormControls();
        this.createForm(this.isUpdating);
    }

    // prevent "expression-has-changed-after-it-was-checked-error"
    get isValidForm() {
        if (this.isUpdating) {
            return this.poleDetailsForm.dirty ? this.poleDetailsForm.valid : true;
        }
        return this.poleDetailsForm.valid;
    }
}
