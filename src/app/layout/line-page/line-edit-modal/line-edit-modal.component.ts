import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LineDto } from '../../../core/modules/line/models';
import { RoleDto } from '../../../core/modules/role/models/role';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoleDto } from '../../../core/modules/pole/models/pole';

@Component({
    selector: 'app-line-edit-modal',
    templateUrl: './line-edit-modal.component.html',
    styleUrls: ['./line-edit-modal.component.scss'],
    animations: []
})
export class LineEditModalComponent {

    @ViewChild('content') modal;
    @Output() submit = new EventEmitter();
    @Input('poleList') poleList: PoleDto[];

    lineDetailsForm: FormGroup;
    code: FormControl;
    beginPoleId: FormControl;
    endPoleId: FormControl;
    description: FormControl;

    modalTitle: string;
    selectedLine: LineDto;
    isUpdating: boolean;

    constructor(private modalService: NgbModal) {

    }

    createFormControls() {
        this.code = new FormControl('', Validators.required);
        this.beginPoleId = new FormControl('', Validators.required);
        this.endPoleId = new FormControl('', Validators.required);
        this.description = new FormControl('', Validators.required);
    }

    createForm(isUpdating: boolean) {
        let group = {
            code: this.code,
            beginPoleId: this.beginPoleId,
            endPoleId: this.endPoleId,
            description: this.description,
        };

        this.lineDetailsForm = new FormGroup(group);
    }

    // change ngClass
    validatedFormClass(formControlName) {
        let classObject = {
            'has-danger': formControlName.invalid && formControlName.dirty,
            'has-success': formControlName.valid && formControlName.dirty
        };
        return classObject;
    }

    open(line?) {
        this.modalTitle = line.id ? 'Update' : 'Create';
        this.isUpdating = line.id ? true : false;
        this.selectedLine = line;
        this.modalService.open(this.modal);
        this.createFormControls();
        this.createForm(this.isUpdating);
    }

    // prevent "expression-has-changed-after-it-was-checked-error"
    get isValidForm() {
        if (this.isUpdating) {
            return this.lineDetailsForm.dirty ? this.lineDetailsForm.valid : true;
        }
        return this.lineDetailsForm.valid;
    }
}
